import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { POPFIX } from "@/lib/popfix";

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(80),
  phone: z.string().trim().min(6, "Téléphone invalide").max(30),
  deviceType: z.string().min(1, "Choisissez un type d'appareil"),
  brandModel: z.string().trim().max(120).optional().or(z.literal("")),
  problem: z.string().trim().min(10, "Décrivez la panne (10 caractères min.)").max(1500),
});

const deviceTypes = [
  "Smartphone",
  "Tablette",
  "Console (PS5, PS4, Switch, Xbox…)",
  "Manette",
  "Accessoire / Autre",
];

export function DiagnosticForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      deviceType: String(fd.get("deviceType") ?? ""),
      brandModel: String(fd.get("brandModel") ?? ""),
      problem: String(fd.get("problem") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Formulaire invalide");
      return;
    }
    setSubmitting(true);

    // Fallback: open user's email client with the diagnostic message.
    const subject = `Demande de diagnostic — ${parsed.data.deviceType}`;
    const body = [
      `Nom : ${parsed.data.name}`,
      `Téléphone : ${parsed.data.phone}`,
      `Type d'appareil : ${parsed.data.deviceType}`,
      parsed.data.brandModel ? `Marque / modèle : ${parsed.data.brandModel}` : null,
      "",
      "Problème rencontré :",
      parsed.data.problem,
    ]
      .filter(Boolean)
      .join("\n");
    const mailto = `mailto:contact@popfix.example?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setTimeout(() => {
      toast.success("Diagnostic envoyé — on vous recontacte rapidement.");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  const inputCls =
    "w-full bg-pop-black border border-white/10 px-4 py-3 text-pop-off text-sm outline-none focus:border-pop-red transition-colors placeholder:text-zinc-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" placeholder="Votre nom *" className={inputCls} required maxLength={80} />
        <input name="phone" placeholder="Téléphone *" type="tel" className={inputCls} required maxLength={30} />
      </div>
      <select name="deviceType" className={`${inputCls} appearance-none`} required defaultValue="">
        <option value="" disabled>Type d'appareil *</option>
        {deviceTypes.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      <input name="brandModel" placeholder="Marque et modèle (ex : iPhone 13, PS5, Switch OLED)" className={inputCls} maxLength={120} />
      <textarea
        name="problem"
        rows={5}
        required
        maxLength={1500}
        placeholder="Décrivez la panne : symptômes, depuis quand, ce que vous avez essayé… *"
        className={inputCls}
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-pop-red text-white py-4 font-display font-bold uppercase tracking-widest text-sm hover:bg-pop-red-deep transition-colors disabled:opacity-60"
      >
        {submitting ? "Envoi…" : "Lancer le diagnostic"}
      </button>
      <p className="text-[10px] uppercase tracking-widest font-mono text-zinc-500 text-center">
        Ou appelez directement —{" "}
        <a href={POPFIX.phoneHref} className="text-pop-red hover:text-pop-off">
          {POPFIX.phone}
        </a>
      </p>
    </form>
  );
}
