import { SectionHeading } from '@/components/SectionHeading/SectionHeading';

export default function OurProjects() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="font-copperplate-gothic-bold text-7xl font-bold">Our Projects</h1>
      <CleanRoomEfficiencyImprovement />
      <BarcodingImplementation />
      <BuildingLayout />
    </div>
  );
}

const CleanRoomEfficiencyImprovement = () => (
  <section className="mt-16">
    <SectionHeading
      heading="Project 1"
      subHeading="Clean Room Efficiency Improvement"
      subHeadingProps={{
        className: 'max-w-none',
      }}
    />
    <div className="bg-primary-light p-8 rounded-tr-vl mt-8">
      <h3 className="font-copperplate-gothic-bold text-2xl font-bold">Problem</h3>
      <div className="h-1 w-20 bg-secondary mt-6"></div>
      <ul className="list-disc font-poppins text-gray-500 flex flex-col gap-2 list-inside mt-4">
        <li>Client needed to optimize their cleanroom process.</li>
        <li>
          Process required 20 people (10 per shift) working 10 hours daily, including occasional
          Saturdays.
        </li>
        <li>
          Annual operator cost in Silicon Valley: $73,000 (including benefits, excluding overtime).
        </li>
        <li>Workers averaged 16–18 hours of overtime per week.</li>
        <li>Overhead costs were too high relative to revenue.</li>
      </ul>
      <h3 className="font-copperplate-gothic-bold text-2xl font-bold mt-8">Outcome</h3>
      <div className="h-1 w-20 bg-secondary mt-6"></div>
      <ul className="list-disc font-poppins text-gray-500 flex flex-col gap-2 list-inside mt-4">
        <li>Observed cleanroom process, collected data, and analyzed times.</li>
        <li>
          Calculated headcount needed to produce 48 units/day; found 6 excess staff members (3 per
          shift).
        </li>
        <li>Performed line balancing and trained operators to sustain efficiency.</li>
        <li>Conducted root cause analysis to identify overprocessing (redundant stations).</li>
        <li>
          Removed a testing station, resulting in nearly doubling output from 48 to 88 cameras/day.
        </li>
      </ul>
      <h3 className="font-copperplate-gothic-bold text-2xl font-bold mt-8">Deliverables</h3>
      <div className="h-1 w-20 bg-secondary mt-6"></div>
      <ul className="list-disc font-poppins text-gray-500 flex flex-col gap-2 list-inside mt-4">
        <li>Lowered labor cost</li>
        <li>Higher output</li>
        <li>Reduced touch time</li>
      </ul>
    </div>
  </section>
);

const BarcodingImplementation = () => (
  <section className="mt-16">
    <SectionHeading
      heading="Project 2"
      subHeading="Barcoding Implementation"
      subHeadingProps={{
        className: 'max-w-none',
      }}
    />
    <div className="bg-primary-light p-8 rounded-tr-vl mt-8">
      <h3 className="font-copperplate-gothic-bold text-2xl font-bold">Problem</h3>
      <div className="h-1 w-20 bg-secondary mt-6"></div>
      <ul className="list-disc font-poppins text-gray-500 flex flex-col gap-2 list-inside mt-4">
        <li>
          A startup producing medical equipment struggled with accurately tracking in-process
          failures.
        </li>
        <li>
          Failures were manually tracked, lacked traceability, and involved lengthy documentation
          processes.
        </li>
        <li>
          Operators had to manually record serial numbers, ID numbers, and failure reasons, leading
          to inefficiency and errors.
        </li>
        <li>
          Manufacturing engineers required detailed failure data to reduce occurrences but lacked
          sufficient information.
        </li>
      </ul>
      <h3 className="font-copperplate-gothic-bold text-2xl font-bold mt-8">Outcome</h3>
      <div className="h-1 w-20 bg-secondary mt-6"></div>
      <ul className="list-disc font-poppins text-gray-500 flex flex-col gap-2 list-inside mt-4">
        <li>
          Identified data requirements for in-process failures through discussions with operators
          and supervisors.
        </li>
        <li>
          Designed solutions, including:
          <ul className="list-disc font-poppins text-gray-500 flex flex-col list-inside pl-6">
            <li>Excel sheet for inputting data.</li>
            <li>Failure code sheet tailored to each station.</li>
            <li>Station-specific barcode system.</li>
            <li>New barcode tags for equipment with serial and ID numbers.</li>
            <li>Barcode scanners for operators.</li>
          </ul>
        </li>
        <li>Conducted training on the new procedure for accurate failure recording.</li>
        <li>
          Improved time efficiency, traceability, failure pattern identification, and corrective
          action implementation.
        </li>
      </ul>
      <h3 className="font-copperplate-gothic-bold text-2xl font-bold mt-8">Deliverables</h3>
      <div className="h-1 w-20 bg-secondary mt-6"></div>
      <ul className="list-disc font-poppins text-gray-500 flex flex-col gap-2 list-inside mt-4">
        <li>Barcoding</li>
        <li>Improved Traceability</li>
        <li>Mistake Proofing</li>
        <li>Reduced touch time</li>
        <li>Better in process failure procedure</li>
      </ul>
    </div>
  </section>
);

const BuildingLayout = () => (
  <section className="mt-16">
    <SectionHeading
      heading="Project 3"
      subHeading="Building Layout"
      subHeadingProps={{
        className: 'max-w-none',
      }}
    />
    <div className="bg-primary-light p-8 rounded-tr-vl mt-8">
      <h3 className="font-copperplate-gothic-bold text-2xl font-bold">Problem</h3>
      <div className="h-1 w-20 bg-secondary mt-6"></div>
      <ul className="list-disc font-poppins text-gray-500 flex flex-col gap-2 list-inside mt-4">
        <li>A startup was relocating to a new headquarters.</li>
        <li>
          Required layout design for:
          <ul className="list-disc font-poppins text-gray-500 flex flex-col list-inside pl-6">
            <li>Warehouse</li>
            <li>Shipping area</li>
            <li>Receiving area</li>
            <li>Several production areas</li>
            <li>Office space</li>
            <li>Kitchen</li>
            <li>Bathrooms</li>
          </ul>
        </li>
      </ul>
      <h3 className="font-copperplate-gothic-bold text-2xl font-bold mt-8">Outcome</h3>
      <div className="h-1 w-20 bg-secondary mt-6"></div>
      <ul className="list-disc font-poppins text-gray-500 flex flex-col gap-2 list-inside mt-4">
        <li>Project duration: Several months.</li>
        <li>
          Collaborated with:
          <ul className="list-disc font-poppins text-gray-500 flex flex-col list-inside pl-6">
            <li>VP</li>
            <li>Director of Manufacturing</li>
            <li>Director of Equipment Engineering</li>
            <li>Director of Facilities</li>
          </ul>
        </li>
        <li>
          Task:
          <ul className="list-disc font-poppins text-gray-500 flex flex-col list-inside pl-6">
            <li>Created a layout for the new headquarters using AutoCAD.</li>
            <li>Conducted a capacity analysis for each area.</li>
            <li>Ensured logical flow within the facility.</li>
          </ul>
        </li>
        <li>
          Facility details:
          <ul className="list-disc font-poppins text-gray-500 flex flex-col list-inside pl-6">
            <li>Double the size of the old headquarters.</li>
            <li>Initially an empty warehouse.</li>
          </ul>
        </li>
        <li>
          Challenges:
          <ul className="list-disc font-poppins text-gray-500 flex flex-col list-inside pl-6">
            <li>Numerous revisions were required to finalize the layout.</li>
          </ul>
        </li>
      </ul>
      <h3 className="font-copperplate-gothic-bold text-2xl font-bold mt-8">Deliverables</h3>
      <div className="h-1 w-20 bg-secondary mt-6"></div>
      <ul className="list-disc font-poppins text-gray-500 flex flex-col gap-2 list-inside mt-4">
        <li> AutoCad Layout of Headquarters</li>
      </ul>
    </div>
  </section>
);
