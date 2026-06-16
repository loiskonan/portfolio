import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact depuis le portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Contact"
          subtitle="Discutons de votre prochain projet"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-400 leading-relaxed">
              Vous avez un projet en tête ou souhaitez en savoir plus sur mon
              travail ? N'hésitez pas à me contacter. Je suis disponible pour
              des missions de développement Full Stack, de conseil IT ou de
              digitalisation de processus métiers.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-blue-500/30 transition-colors group"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-white">{personalInfo.email}</p>
                </div>
              </a>

              {personalInfo.phone.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-blue-500/30 transition-colors group"
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Phone size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Téléphone</p>
                    <p className="text-white">{phone}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Localisation</p>
                  <p className="text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Send size={18} />
              Envoyer le message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
