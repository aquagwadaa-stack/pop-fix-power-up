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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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

    const message = [
      "Bonjour POP'FIX, je souhaite demander un diagnostic.",
      "",
      `Nom : ${parsed.data.name}`,
      `Téléphone : ${parsed.data.phone}`,
      `Appareil : ${parsed.data.deviceType}`,
      parsed.data.brandModel ? `Marque / modèle : ${parsed.data.brandModel}` : null,
      "",
      "Problème rencontré :",
      parsed.data.problem,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await navigator.clipboard.writeText(message);
      toast.success("Votre demande a été copiée. Collez-la dans le message Instagram.");
      window.open(POPFIX.instagram, "_blank", "noopener,noreferrer");
    } catch {
      toast.info("Contactez POP'FIX par téléphone ou Instagram pour transmettre votre demande.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls =
    "w-full bg-pop-black border border-white/10 px-4 py-3 text-pop-off text-sm outline-none focus:border-pop-red transition-colors placeholder:text-zinc-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" placeholder="Votre nom *" className={inputCls} required maxLength={80} />
        <input
          name="phone"
          placeholder="Téléphone *"
          type="tel"
          className={inputCls}
          required
          maxLength={30}
        />
      </div>
      <select name="deviceType" className={`${inputCls} appearance-none`} required defaultValue="">
        <option value="" disabled>
          Type d'appareil *
        </option>
        {deviceTypes.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <input
        name="brandModel"
        placeholder="Marque et modèle (ex : iPhone 13, PS5, Switch OLED)"
        className={inputCls}
        maxLength={120}
      />
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
        {submitting ? "Préparation…" : "Préparer ma demande via Instagram"}
      </button>
      <p className="text-xs text-zinc-500 text-center leading-relaxed">
        Le formulaire prépare votre message et ouvre Instagram. Vous pouvez aussi appeler le{" "}
        <a href={POPFIX.phoneHref} className="text-pop-red hover:text-pop-off">
          {POPFIX.phone}
        </a>
        .
      </p>
    </form>
  );
}
