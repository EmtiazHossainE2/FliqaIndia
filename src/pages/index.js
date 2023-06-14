import {
  Award,
  Banner,
  BestOffers,
  Blogs,
  Brands,
  CTA,
  Discover,
  Photography,
  RealWedding,
  Services,
  Success,
  Testimonials,
  TrustPeople,
} from "@/components/Homepage";
import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
export default function Home() {
  return (
    <body>
      <Header />
      <Banner />
      <CTA />
      <TrustPeople />
      <Services />
      <Discover />
      <Brands />
      <Blogs />
      <RealWedding />
      <BestOffers />
      <Testimonials />
      <Award />
      <Success />
      <Photography />
      <Footer />
    </body>
  );
}
