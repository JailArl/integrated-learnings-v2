import React from 'react';
import { PageHeader, Section, Button } from '../components/Components';
import { PRICING_DATA } from '../constants';

const Pricing: React.FC = () => {
  return (
    <>
      <PageHeader title="Transparent Pricing" subtitle="Fair rates for quality education. Prices vary by tutor qualification and experience." />
      <Section>
        <div className="space-y-12">
          {PRICING_DATA.map((tier, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                <h3 className="text-xl font-bold text-primary">{tier.category}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="bg-white text-slate-800 font-semibold border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4">Level</th>
                      <th className="px-6 py-4">Part-Time Tutor</th>
                      <th className="px-6 py-4">Full-Time Tutor</th>
                      <th className="px-6 py-4">MOE / Ex-MOE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {tier.rates.map((rate, j) => (
                      <tr key={j} className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-900">{rate.level}</td>
                        <td className="px-6 py-4">{rate.pt}</td>
                        <td className="px-6 py-4">{rate.ft}</td>
                        <td className="px-6 py-4 font-semibold text-secondary">{rate.moe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-blue-50/50 text-xs text-slate-500">
                * Rates are per hour. Transport fees ($5-$15) may apply for home tuition.
              </div>
            </div>
          ))}
        </div>
        
        {/* Simple Policy Link */}
        <div className="mt-16 text-center">
             <p className="text-slate-500 text-sm">Need to know about payment methods or cancellations?</p>
             <Button to="/policies" variant="white" className="mt-2 text-sm text-secondary hover:underline bg-transparent hover:bg-transparent shadow-none">View Parent Policies</Button>
        </div>
      </Section>
    </>
  );
};

export default Pricing;