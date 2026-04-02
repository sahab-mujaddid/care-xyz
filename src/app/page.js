import Banner from "@/components/Home/Banner";
import Caretakersslice from "@/components/Home/Caretakersslice";
import Services from "@/components/Home/Services";
import Image from "next/image";

export default function Home() {
  return (
    
    <div className="space-y-20">
      <section><Banner></Banner></section>
      <section className="container mx-auto px-4 py-16">
  <h2 className="text-center text-primary text-4xl font-bold mb-10">
    About Us
  </h2>

  <div className=" mx-auto">
    
        We believe care is more than a service—it’s a commitment to trust, compassion, 
        and reliability. Our mission is to connect families and individuals with 
        dedicated caretakers who bring both skill and heart to their work.
        We started with a simple vision: to make finding the right caretaker easier, 
        safer, and more transparent. Today, our platform empowers clients to browse 
        verified profiles, check availability, and book with confidence—all in just 
        a few clicks.Behind every caretaker is a story of dedication, and behind every booking is 
        our promise to deliver peace of mind. Whether you need daily assistance, 
        specialized support, or occasional help, we’re here to ensure you always feel cared for.
      
    
  </div>
</section>
      <section><Services></Services></section>
      <section> <Caretakersslice></Caretakersslice>  </section>
      <section className="container mx-auto px-4 py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Card 1 */}
    <div className="card bg-base-100 shadow-md border text-center p-6">
      <h2 className="text-3xl font-bold text-blue-900">5K+</h2>
      <p className="text-gray-600 mt-2">Happy Client</p>
    </div>

    {/* Card 2 */}
    <div className="card bg-base-100 shadow-md border text-center p-6">
      <h2 className="text-3xl font-bold text-blue-900">98%</h2>
      <p className="text-gray-600 mt-2">Satisfaction Rate</p>
    </div>

   
  </div>
</section>

    </div>
  );
}
