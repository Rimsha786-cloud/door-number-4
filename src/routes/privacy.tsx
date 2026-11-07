import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

const TITLE = "Privacy Policy — Door No. 4";
const DESCRIPTION = "How Door No. 4 collects, uses and protects the information you share through this website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <section className="tone-dark bg-emerald pt-40 pb-20">
        <div className="container-deco">
          <p className="eyebrow text-gold">Legal</p>
          <h1 className="mt-6 text-5xl font-light sm:text-6xl">Privacy policy</h1>
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="container-deco max-w-3xl space-y-8 text-lg leading-relaxed text-muted-foreground [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:text-foreground">
          <p>
            This policy explains how Door No. 4 ("we", "us") handles personal information you share with us through this website.
          </p>
          <h2>What we collect</h2>
          <p>
            When you send a message or event enquiry, we collect the details you provide: your name, email address, optional phone
            number, your preferred date and guest numbers (for events) and your message.
          </p>
          <h2>How we use it</h2>
          <p>
            We use this information only to respond to your enquiry and to plan any booking or event you ask us about. We do not sell your
            information or use it for marketing without your consent.
          </p>
          <h2>Storage & security</h2>
          <p>
            Enquiries are stored securely and are only accessible to the Door No. 4 team. We keep them for as long as needed to deal with
            your enquiry and any related booking.
          </p>
          <h2>Third-party services</h2>
          <p>
            This website loads web fonts from Google Fonts and an embedded Google Map, and links to our Instagram and Facebook pages. These
            services may process technical data such as your IP address under their own privacy policies.
          </p>
          <h2>Your choices</h2>
          <p>
            You can ask us to access, correct or delete the information you have shared by emailing{" "}
            <a href={`mailto:${SITE.email}`} className="text-foreground underline underline-offset-4">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
