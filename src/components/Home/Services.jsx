import Link from 'next/link';
import React from 'react';

const Services = () => {
    return (
        <div>
              <h2 className="text-center text-4xl text-primary font-bold mb-10">Our Services</h2>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Babysitting */}
      <div className="card bg-base-100 shadow-md border">
        <figure className="px-6 pt-6">
          <img src="/assets/baby.png" alt="Babysitting" className="w-16 h-16" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Babysitting</h2>
          <p>Experienced sitters for your little ones.</p>
          <div className="card-actions mt-4">
            {/* <Link href="/services/babysitting">
              <button className="btn btn-warning btn-sm">Find Caretaker</button>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Elderly Care */}
      <div className="card bg-base-100 shadow-md border">
        <figure className="px-6 pt-6">
          <img src="/assets/elderly.png" alt="Elderly Care" className="w-16 h-16" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Elderly Care</h2>
          <p>Compassionate care for seniors.</p>
          <div className="card-actions mt-4">
            {/* <Link href="/services/elderly">
              <button className="btn btn-success btn-sm">Find Caretaker</button>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Special Needs Care */}
      <div className="card bg-base-100 shadow-md border">
        <figure className="px-6 pt-6">
          <img src="/assets/special-care.png" alt="Special Needs Care" className="w-16 h-16" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Sick Care</h2>
          <p>Personalized support at home.</p>
          <div className="card-actions mt-4">
            {/* <Link href="/services/special-needs">
              <button className="btn btn-warning btn-sm">Find Caretaker</button>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Medical Assistance */}
      {/* <div className="card bg-base-100 shadow-md border">
        <figure className="px-6 pt-6">
          <img src="/assets/medical-kit.png" alt="Medical Assistance" className="w-16 h-16" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Medical Assistance</h2>
          <p>Professional health care services.</p>
          <div className="card-actions mt-4">
            <Link href="/services/medical">
              <button className="btn btn-info btn-sm">Find Caretaker</button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>

        </div>
    );
};

export default Services;