import { Hero, Layout, Section } from "../../src/composants";

import "../../src/custom.css";

const title = (
  <div>
    Devenez&nbsp;
    <span data-tip="responsable des développements techniques, biz et autres">
      intrapreneur
    </span>{" "}
    d'une Startup d'État !
  </div>
);

const Saison2 = () => (
  <Layout>
    <Hero title="Saison 2" tagline="Appel à candidatures : participez !" />
    <Section title={title} subTitle="Mode d'emploi" className="section-color">
      <div className="container">
        Vous êtes témoin d’irritants récurrents pour les usagers ou les agents
        de votre service? <br />Vous avez une idée de solution numérique qui
        permettrait d’y remédier? Vous êtes prêt(e) à vous investir aux cotés
        d’une équipe mobilisée pendant six mois pour réussir? <br />Vous êtes
        un(e) agent(e) des ministères sociaux et vous avez envie de résoudre un
        vrai problème ?<br />
        <p align="center">
          <h3>
            <a
              href="http://incubateur-des-ministres-sociaux-saison-2.selecteev.io/apply"
              target="_blank"
            >
              Proposez votre idée
            </a>{" "}
            et devenez entrepreneur(se) d'une Startup d'État !
          </h3>
        </p>
        <br />
        Pour devenir entrepreneur(se) des Startups d’État, aucune expertise en
        informatique ou internet n’est nécessaire:{" "}
        <b>
          seule compte votre motivation pour résoudre un véritable problème.
        </b>{" "}
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <img src="/static/images/aventure.jpg" width="50%" />
        </div>
        <br />
        <a
          href="http://incubateur-des-ministres-sociaux-saison-2.selecteev.io/apply"
          target="_blank"
        >
          Cette plateforme
        </a>{" "}
        permet de déposer vos idées. Chacune d'entre elles sera étudiée avec
        attention.
        <br />
        Vous pouvez compléter votre candidature en plusieurs fois et reprendre
        le formulaire à tout moment grâce au lien que vous recevrez par mail
        après avoir répondu aux deux premières questions.<br />
        <br />
        Vous avez jusqu'au <b>vendredi 14 Septembre 2018</b> pour déposer votre
        idée. Si votre candidature est retenue, vous serez ensuite très vite
        recontacté(e) pour participer à la journée de sélection du{" "}
        <b>jeudi 11 octobre 2018</b>. Vous participerez alors à un bootcamp
        pendant lequel vous serez coaché(e) pour{" "}
        <span data-tip="Présenter de façon très synthétique">pitcher</span>{" "}
        devant un jury d'experts.
      </div>
    </Section>
  </Layout>
);

export default Saison2;
