import * as React from "react";
//import { CodePromo } from "../CodePromo";
import { LinkInformations } from "./LinkInformations";
import { NosServices } from "./NosServices";
import { Footer } from "../Footer";

export function LandingPage() {
  return (
    <div>
      {/*
      <div>
        <CodePromo />
      </div>
      */}

      <section className="m-3 md:h-[calc(100vh-14.5rem)]">
        <div>
          <NosServices />
        </div>     
        <div>
          <LinkInformations />
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
}
