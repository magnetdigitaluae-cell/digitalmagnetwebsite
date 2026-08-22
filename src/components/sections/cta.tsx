import Link from "next/link";
import { Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative z-10 -mt-[180px]">
      <div className="container-site">
        <div className="overflow-hidden rounded-[15px]">
          <div
            className="relative bg-gold bg-cover bg-center px-6 py-16 text-center md:px-16 md:py-20"
            style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/69" />
            <div className="relative mx-auto max-w-3xl text-white">
              <h2 className="text-3xl font-bold leading-snug text-white md:text-[40px]">
                Do you have Project and want to Discuss with us ?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-white/90">
                Have a project in mind? Share your ideas and goals with us. Our
                team is ready to discuss your requirements, explore the right
                solutions, and help turn your vision into a successful digital
                project.
              </p>
              <Link
                href="tel:+971565242459"
                className="btn btn-gold mt-8 inline-flex"
              >
                <Phone className="h-4 w-4" />
                Call Us: +971 56 5242459
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
