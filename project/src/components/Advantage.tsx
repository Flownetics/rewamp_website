import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const steps = [
  {
    id: 'feasibility-study',
    number: '01',
    label: 'Feasibility Study',
    title: 'Feasibility Study: How Can We',
    description: 'Before you commit capital to new equipment, we must validate that your chemistry is technically and economically viable in a continuous flow environment.',
    color: '#702594',
    labelColor: 'text-brand-purple',
    delay: '0ms',
    overview: 'Before you commit capital to new equipment, we must validate that your chemistry is technically and economically viable in a continuous flow environment. In this stage, we take your existing "batch recipe"—which may suffer from inconsistent yields or slow kinetics—and re-map it for a continuous system. We aren\'t just looking for a technical "yes"; we are identifying the economic "why".',
    whatWeDo: [
      'Kinetic & Parameter Mapping: We identify the precise temperature, pressure, and residence time required to optimize the reaction profile.',
      'Eliminate Guesswork: We provide a 20–30% manufacturing cost reduction projection at the outset so you can verify the ROI before proceeding.',
      'Proof First: This initiates our "Risk Acknowledgment" pillar—we isolate and solve complex process challenges in the lab to prevent failures in your facility.'
    ],
    caseStudy: {
      title: 'Case Study Spotlight: High-Temperature KSM',
      problem: 'A manufacturer needed to localize a starting material previously sourced from China. The chemistry required a hazardous 400°C operating temperature, which caused significant thermal degradation and material loss in traditional batch setups.',
      essence: 'We re-engineered the process for a custom high-temperature flow platform designed for rapid heat transfer and precise residence time control.',
      result: 'We achieved a one-pot synthesis with minimal heat exposure, resulting in increased yield and selectivity while reducing solvent volumes.',
      businessTakeaway: 'We de-risk "scary" chemistries at the R&D level, enabling localized supply chain independence.'
    },
    technicalCapabilities: [],
    deliverables: [],
    benefits: []
  },
  {
    id: 'process-optimization',
    number: '02',
    label: 'Process Optimization',
    title: 'Process Optimization & Scale-up: Efficiency Re-engineered',
    description: 'Once feasibility is proven, we focus on Process Intensification. This phase is about maximizing space-time yield and stripping away the inherent inefficiencies of batch processing.',
    color: '#1406b3',
    labelColor: 'text-brand-blue',
    delay: '200ms',
    overview: 'Once feasibility is proven, we focus on Process Intensification. This phase is about maximizing space-time yield and stripping away the inherent inefficiencies of batch processing, such as long heating/cooling cycles and manual handling.',
    whatWeDo: [
      'Intensify the Process: We re-engineer the reaction to maximize throughput while minimizing resource consumption, such as catalyst loads and energy.',
      'Streamline Downstream: We analyze the entire value chain to eliminate redundant unit operations, such as mid-process filtration or solvent swaps.',
      'Quality Assurance: We ensure the optimized process consistently meets stringent global standards, including USP and EP specifications.'
    ],
    caseStudy: {
      title: 'Case Study Spotlight: Reductive Amination',
      problem: 'An existing batch process was operationally heavy, requiring 35 hours per cycle and complex catalyst management.',
      essence: 'We optimized the kinetics to transition the chemistry into a continuous environment with mapped thermal and pressure parameters.',
      result: 'Cycle time was reduced by 42% (from 35 hours down to 20 hours), and we simplified the downstream by completely eliminating the need for catalyst filtration.',
      businessTakeaway: 'We don\'t just move you to flow; we build a faster, leaner process that produces higher quality material with 25% better efficiency.'
    },
    businessValue: {
      title: 'The Business Value',
      points: [
        'Capex-Free Engagement: Even at this advanced stage, you aren\'t paying for heavy equipment yet. We use our own infrastructure and expertise to validate the scale.',
        'Significant Cost Reduction: By shortening production cycles and reducing raw material waste, we pave the way for an average 27% decrease in manufacturing costs.',
        'Time-to-Market: You go from "lab scale" to "market ready" much faster than traditional methods sometimes delivering kilos of material in weeks instead of months.'
      ]
    },
    technicalCapabilities: [],
    deliverables: [],
    benefits: []
  },
  {
    id: 'commercialization',
    number: '03',
    label: 'Commercialization',
    title: 'Commercialization & FaaS',
    description: 'The final phase brings the innovation to your plant floor through our Factory-as-a-Service (FaaS) model. We deploy a modular, automated platform that scales your production without the burden of traditional capital expenditure.',
    color: '#057210',
    labelColor: 'text-brand-green',
    delay: '400ms',
    overview: 'The final phase brings the innovation to your plant floor through our Factory-as-a-Service (FaaS) model. We deploy a modular, automated platform that scales your production without the burden of traditional capital expenditure.',
    whatWeDo: [
      'Modular Deployment: We install a custom reactor and automated platform at your site, designed for your specific throughput requirements.',
      'AI-Driven Automation: Our systems utilize IoT and proprietary software for remote monitoring and "push-button" manufacturing consistency.',
      'Zero-Capex Engagement: We shift the financial model from CAPEX to a transparent, OPEX-based subscription tied to your actual production and savings.'
    ],
    caseStudy: {
      title: 'Case Study Spotlight: API Precursor (Diazotization)',
      problem: 'The production of an API precursor involved a highly unstable diazo-intermediate and a dangerous 100°C exotherm, which were difficult to manage at a scale of 5 tons per month in batch.',
      essence: 'We developed a telescopic flow system with a Heat Transfer (HT) coefficient greater than 2000 to manage the extreme thermal energy.',
      result: 'We successfully scaled from 0.1 kg/hr in the lab to a 5 tons/month industrial capacity with a 93% isolated yield.',
      businessTakeaway: 'By adopting FaaS, the client achieved an 18% cost reduction and a 44% decrease in effluents, reaching full ROI in just 15 months through operational savings alone.'
    },
    technicalCapabilities: [],
    deliverables: [],
    benefits: []
  }
];

export default function Advantage() {
  const titleRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="advantage" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gray-200/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gray-300/15 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start relative z-10">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <div ref={titleRef} className="reveal-on-scroll lg:sticky lg:top-24" style={{ marginTop: 'calc(200px + 1.5rem)' }}>
            <div className="text-center lg:text-left">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-gray-900" style={{ fontFamily: "'FF Nort', sans-serif" }}>
                    The Path to<br />Production.
                  </h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light" style={{ fontFamily: "'FF Nort', sans-serif" }}>
                We've removed the barriers. From feasibility to full-scale production in three comprehensive phases.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 grid gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ number, label, title, description, color, labelColor, delay, index, id }: {
  number: string;
  label: string;
  title: string;
  description: string;
  color: string;
  labelColor: string;
  delay: string;
  index: number;
  id: string;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className="bg-gradient-to-br from-white via-brand-light to-white p-4 sm:p-5 rounded-xl sm:rounded-2xl reveal-on-scroll border-2 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group flex flex-col"
      style={{
        transitionDelay: delay,
        borderColor: color,
        maxHeight: '280px'
      }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundColor: color }}
      ></div>

      <div className="relative z-10 flex flex-col flex-1">
        <div className="mb-2">
          <span className={`${labelColor} text-xs font-bold uppercase tracking-widest block mb-1`}>
            {number}
          </span>
          <span className={`${labelColor} text-xs font-semibold uppercase tracking-wide`}>
            {label}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-medium mb-1.5 text-gray-900 group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden" style={{ fontFamily: "'FF Nort', sans-serif", maxHeight: '3.5rem' }}>
          {title}
        </h3>
        <p className="text-gray-600 text-xs leading-relaxed mb-3 font-light flex-1 overflow-hidden" style={{ fontFamily: "'FF Nort', sans-serif", maxHeight: '2.5rem' }}>{description}</p>

        <button
          onClick={() => navigate(`/path-to-production/${id}`)}
          className={`inline-flex items-center gap-2 ${labelColor} font-semibold text-xs hover:gap-3 transition-all group/btn mt-auto`}
        >
          View More
          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-1.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}
