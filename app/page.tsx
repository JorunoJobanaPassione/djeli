"use client";

import { useState } from "react";
import { joinWaitlist } from "./actions";

const FAQ_ITEMS = [
  {
    q: "Qu'est-ce que la FNE en Côte d'Ivoire ?",
    a: "La Facture Normalisée Électronique (FNE) est obligatoire depuis mai 2025 pour toutes les entreprises en Côte d'Ivoire. Chaque facture doit être connectée au système de la DGI avec un QR code de validation.",
  },
  {
    q: "Quelles sont les sanctions si je ne suis pas conforme ?",
    a: "Les entreprises non conformes s'exposent à des amendes et pénalités fiscales. La DGI effectue des contrôles réguliers. Djeli vous met en conformité automatiquement.",
  },
  {
    q: "Djeli fonctionne-t-il avec Orange Money et MTN ?",
    a: "Oui ! Djeli intègre Orange Money, MTN Mobile Money et Wave. Vos clients peuvent payer leurs factures directement depuis leur téléphone.",
  },
  {
    q: "Combien coûte Djeli ?",
    a: "Essai gratuit de 14 jours. Ensuite, les plans commencent à 10 000 FCFA/mois pour les microentreprises. Moins cher qu'un comptable.",
  },
  {
    q: "Puis-je utiliser Djeli sur mon téléphone ?",
    a: "Oui, Djeli est conçu mobile-first. Créez et envoyez des factures depuis votre smartphone, même hors connexion.",
  },
];

const BENEFITS = [
  {
    icon: "🛡️",
    title: "Conforme FNE",
    description: "Factures normalisées avec QR code DGI. Zéro risque d'amende.",
  },
  {
    icon: "📱",
    title: "Mobile-first",
    description: "Créez des factures en 30 secondes depuis votre téléphone.",
  },
  {
    icon: "💰",
    title: "Mobile Money",
    description: "Orange Money, MTN, Wave. Vos clients paient en 1 clic.",
  },
  {
    icon: "📊",
    title: "Suivi impayés",
    description: "Voyez qui vous doit de l'argent. Relances automatiques.",
  },
];

const PAIN_POINTS = [
  "Vous faites encore vos factures sur papier ou Excel ?",
  "Vous ne savez pas si vous êtes conforme à la FNE ?",
  "Vous perdez de l'argent à cause des impayés ?",
  "Vous n'avez aucune visibilité sur votre CA ?",
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !phone) return;

    setLoading(true);
    const result = await joinWaitlist(email, phone);
    if (result.success) {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-emerald-400">Dje</span>li
          </div>
          <a
            href="#waitlist"
            className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-500 transition-all"
          >
            Rejoindre la liste
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-6">
            FNE obligatoire depuis mai 2025
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Factures FNE conformes
            <br />
            <span className="text-emerald-400">en 30 secondes</span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            La solution mobile-first pour PME ivoiriennes. Conformité DGI automatique,
            paiement Mobile Money intégré.
          </p>

          <a
            href="#waitlist"
            className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg hover:bg-emerald-500 transition-all hover:scale-105"
          >
            Rejoindre la liste d'attente
          </a>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Vous vous reconnaissez ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {PAIN_POINTS.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20"
              >
                <span className="text-red-400 text-xl">✗</span>
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-emerald-400 font-semibold text-lg">
              Djeli résout tous ces problèmes.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi Djeli ?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Une solution pensée pour les entrepreneurs ivoiriens.
              Simple, conforme, abordable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 border-y border-gray-800 bg-gray-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400">56K+</div>
              <div className="text-sm text-gray-400">PME en Côte d'Ivoire</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">70%</div>
              <div className="text-sm text-gray-400">Utilisent Mobile Money</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">Mai 2025</div>
              <div className="text-sm text-gray-400">FNE obligatoire</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">30s</div>
              <div className="text-sm text-gray-400">Pour créer une facture</div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20 px-6 bg-gradient-to-b from-emerald-900/20 to-gray-950">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soyez parmi les premiers
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Rejoignez la liste d'attente et bénéficiez de 3 mois gratuits au lancement.
          </p>

          {submitted ? (
            <div className="p-8 bg-emerald-500/20 rounded-2xl border border-emerald-500/30">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-2">Merci !</h3>
              <p className="text-gray-400">
                Vous êtes inscrit. On vous contacte dès que Djeli est prêt.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div className="text-gray-500 text-sm">ou</div>
              <input
                type="tel"
                placeholder="Votre numéro WhatsApp (ex: +225 07 XX XX XX)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                disabled={loading || (!email && !phone)}
                className="w-full px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg hover:bg-emerald-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Inscription..." : "Rejoindre la liste d'attente"}
              </button>
              <p className="text-gray-500 text-sm">
                Pas de spam. On vous contacte uniquement au lancement.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.q}
                className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold">
              <span className="text-emerald-400">Dje</span>li
            </div>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="mailto:contact@djeli.app" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2026 Djeli. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
