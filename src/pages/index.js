import {
  Award,
  Banner,
  BestOffers,
  Blogs,
  Brands,
  CTA,
  CTA2,
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
    <div>
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
      <CTA2/>
      <Footer />
    </div>
  );
}
