import { Contact_Us } from "../constraints";

function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20">
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Get in touch</h2>
      <p className="mt-4 max-w-md text-fg/75">
        Have a role or project in mind? Email me and I’ll reply as soon as I can.
      </p>
      <a href={`mailto:${Contact_Us.email}`}
         className="mt-8 inline-block break-all font-display text-2xl font-bold text-accent underline underline-offset-8 md:text-4xl">
        {Contact_Us.email}
      </a>
      <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-muted">
        <a href={`tel:${Contact_Us.phone.replace(/\s/g, "")}`} className="hover:text-fg">{Contact_Us.phone}</a>
        <span>{Contact_Us.address}</span>
      </div>
    </section>
  );
}

export default Contact;