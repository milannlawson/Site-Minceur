// ══════════════════════════════════════════════════════════
//  FIREBASE-DB.JS — Sync localStorage ↔ Firestore
//  Stratégie :
//   • Les lectures se font depuis localStorage (rapide, synchrone)
//   • Les écritures vont dans localStorage ET Firestore
//   • Un listener temps réel propage les changements d'autres
//     appareils vers localStorage puis redessine la page
// ══════════════════════════════════════════════════════════

(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyAFI1eDZe80j07MLGNQQYyrQR6WZ-SZGLo",
    authDomain: "minceur-light.firebaseapp.com",
    projectId: "minceur-light",
    storageBucket: "minceur-light.firebasestorage.app",
    messagingSenderId: "98885497322",
    appId: "1:98885497322:web:27c0fa25dbed3e807c8293"
  };

  // Évite une double initialisation si le script est chargé plusieurs fois
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const db  = firebase.firestore();
  const DOC = db.collection("ml").doc("data");

  const KEYS = ["caloriesData", "dailyGoal", "poidsData", "poidsGoal", "sportPlanning", "runningData", "runningGoal"];

  // ── Écriture : localStorage + Firestore ──
  window.dbSet = function (key, value) {
    localStorage.setItem(key, value);
    DOC.set({ [key]: value }, { merge: true }).catch(console.error);
  };

  // ── Suppression : localStorage + Firestore ──
  window.dbRemove = function (key) {
    localStorage.removeItem(key);
    DOC.update({ [key]: firebase.firestore.FieldValue.delete() }).catch(console.error);
  };

  // ── Listener temps réel : Firestore → localStorage → re-render ──
  DOC.onSnapshot((snap) => {
    if (!snap.exists) return;
    const remote = snap.data();
    let changed = false;
    KEYS.forEach((key) => {
      if (remote[key] !== undefined && remote[key] !== localStorage.getItem(key)) {
        localStorage.setItem(key, remote[key]);
        changed = true;
      }
    });
    if (changed && typeof window.__onDbSync === "function") {
      window.__onDbSync();
    }
  }, console.error);

  // ── Chargement initial depuis Firestore (nouveau appareil) ──
  DOC.get().then((snap) => {
    if (!snap.exists) return;
    const remote = snap.data();
    KEYS.forEach((key) => {
      if (remote[key] !== undefined) {
        localStorage.setItem(key, remote[key]);
      }
    });
    if (typeof window.__onDbSync === "function") window.__onDbSync();
  }).catch(console.error);
})();
