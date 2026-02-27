// Patents and Copyrights Data for Prof. (Dr.) Gurinder Singh

export interface Patent {
  id: number;
  title: string;
  category: "test" | "system" | "theorem" | "model" | "theory" | "app" | "other";
  description?: string;
}

// Psychometric Tests & Assessment Tools
export const assessmentTests: Patent[] = [
  { id: 1, title: "STRESS-O-GAUGE", category: "test", description: "Comprehensive stress measurement and analysis tool" },
  { id: 2, title: "BA Test - Behavior Annotator", category: "test", description: "Behavioral pattern analysis and annotation system" },
  { id: 3, title: "CM Test - Competence Measurement", category: "test", description: "Professional competency assessment framework" },
  { id: 4, title: "DR Test – Determination Reckoner", category: "test", description: "Determination and persistence evaluation tool" },
  { id: 5, title: "EQ Test – Efficiency Quotient", category: "test", description: "Work efficiency and productivity assessment" },
  { id: 6, title: "FIT Test – Follow-up Intensity Test", category: "test", description: "Follow-through capability measurement" },
  { id: 7, title: "GS Test – Goal Setting", category: "test", description: "Goal-setting ability and planning assessment" },
  { id: 8, title: "HQ Test – Humanity Quotient", category: "test", description: "Emotional intelligence and empathy measurement" },
  { id: 9, title: "JAM Test – Joining hands Ability Monitor", category: "test", description: "Collaboration and teamwork assessment" },
  { id: 10, title: "LS Test – Listening Skills", category: "test", description: "Active listening capability evaluation" },
  { id: 11, title: "ME Test – Mission Explicator", category: "test", description: "Mission clarity and communication assessment" },
  { id: 12, title: "AN Test – Ability to say 'No'", category: "test", description: "Assertiveness and boundary-setting evaluation" },
  { id: 13, title: "AO Test – Ability to identify and leverage Opportunity", category: "test", description: "Opportunity recognition and utilization assessment" },
  { id: 14, title: "IS Test - Influencing Skill-o-meter", category: "test", description: "Persuasion and influence capability measurement" },
  { id: 15, title: "KA Test - Knowledge Assessor", category: "test", description: "Knowledge depth and breadth evaluation" },
  { id: 16, title: "PR Test - Passion-o-rater", category: "test", description: "Passion and motivation level assessment" },
  { id: 17, title: "QIT - Quality Index Test", category: "test", description: "Quality consciousness and attention to detail" },
  { id: 18, title: "R3 Test – Risk Readiness Reckoner", category: "test", description: "Risk appetite and management assessment" },
  { id: 19, title: "SA Test (SAT) - Strategic Ability Test", category: "test", description: "Strategic thinking and planning evaluation" },
  { id: 20, title: "T Test - Trust-o-mapper", category: "test", description: "Trust-building and reliability assessment" },
  { id: 21, title: "UI Test - Uniqueness Identifier", category: "test", description: "Individual uniqueness and differentiation analysis" },
  { id: 22, title: "V Test - Are you a Visionary?", category: "test", description: "Visionary thinking and foresight assessment" },
  { id: 23, title: "W Test - Wisdom Test", category: "test", description: "Practical wisdom and judgment evaluation" },
  { id: 24, title: "XAT - X-factor Annotator Test", category: "test", description: "Identifying unique differentiating factors" },
  { id: 25, title: "YTW Test - Yearn to Win", category: "test", description: "Competitive drive and achievement motivation" },
  { id: 26, title: "ZR Test - Zest-o-rater", category: "test", description: "Enthusiasm and energy level assessment" },
];

// Technical Systems & Innovations
export const technicalSystems: Patent[] = [
  { id: 27, title: "Load Sensing Controlled Ignition System", category: "system", description: "Automotive safety innovation for load-based ignition control" },
  { id: 28, title: "Helmet Controlled Ignition System", category: "system", description: "Road safety system linking helmet usage to vehicle operation" },
  { id: 29, title: "Unique Digital Identity Database System", category: "system", description: "Digital identity management and verification system" },
  { id: 30, title: "Digital Examination Controlling Device", category: "system", description: "Examination integrity and monitoring system" },
  { id: 31, title: "Rainbow Dust Closet", category: "system", description: "Innovative sanitation and waste management solution" },
  { id: 32, title: "Easy Shop Trolley", category: "system", description: "Smart shopping assistance innovation" },
  { id: 33, title: "Seniors Buddy App", category: "app", description: "Digital companion application for elderly care and support" },
];

// Theoretical Frameworks & Theorems
export const theoreticalFrameworks: Patent[] = [
  { id: 34, title: "Theorem of Limitless Thinking", category: "theorem", description: "Framework for breaking cognitive limitations" },
  { id: 35, title: "Nucleus Theorem", category: "theorem", description: "Core principles of organizational centrality" },
  { id: 36, title: "Dominant Passive Personality Theorem", category: "theorem", description: "Personality dynamics and leadership framework" },
  { id: 37, title: "J-THEORY", category: "theory", description: "Comprehensive behavioral and organizational theory" },
  { id: 38, title: "Teoria Situazionale", category: "theory", description: "Situational leadership and management approach" },
  { id: 39, title: "V KAN THEORY", category: "theory", description: "Capability and potential realization framework" },
  { id: 40, title: "Depression-Exhilaration Supposition", category: "theorem", description: "Emotional cycle and mental health framework" },
  { id: 41, title: "PEC Theorem of Green Engineering", category: "theorem", description: "Sustainable engineering principles framework" },
  { id: 42, title: "Chaotic Stress Situational Theorem", category: "theorem", description: "Stress management in complex environments" },
  { id: 43, title: "RTR Contributors Theorem", category: "theorem", description: "Resource and talent recognition framework" },
  { id: 44, title: "EI Theory of Motivation", category: "theory", description: "Emotional Intelligence-based motivation theory" },
  { id: 45, title: "SCD Project Management Offices Theorem", category: "theorem", description: "Project management optimization framework" },
  { id: 46, title: "DSCD Theorem of Behaviour", category: "theorem", description: "Behavioral analysis and prediction framework" },
  { id: 47, title: "RB Theorem of Success", category: "theorem", description: "Success factors and achievement framework" },
];

// Management Models & Frameworks
export const managementModels: Patent[] = [
  { id: 48, title: "6F Model of Balance in Life", category: "model", description: "Holistic life balance framework covering six dimensions" },
  { id: 49, title: "PYRAMID FOR SMART CITIES NEED OF DIGITAL CITIZEN", category: "model", description: "Digital citizenship and smart city development model" },
  { id: 50, title: "3 A's OF FUTURE JOBS", category: "model", description: "Future workforce skills and employability framework" },
  { id: 51, title: "3Es of Motivation", category: "model", description: "Three-dimensional motivation enhancement model" },
  { id: 52, title: "BHAG Theory of Leadership", category: "theory", description: "Big Hairy Audacious Goals leadership framework" },
  { id: 53, title: "3L Theory of Work Culture", category: "theory", description: "Workplace culture development framework" },
  { id: 54, title: "DHAKNOWISVAL: Model of Education System", category: "model", description: "Comprehensive educational system transformation model" },
  { id: 55, title: "IMPRESA - Model of Industry 4.0", category: "model", description: "Industry 4.0 implementation and adoption framework" },
  { id: 56, title: "TTP (Transaction Amount, Time Period, Place) Typology", category: "model", description: "Transaction analysis and classification system" },
];

// Combined list of all patents
export const allPatents: Patent[] = [
  ...assessmentTests,
  ...technicalSystems,
  ...theoreticalFrameworks,
  ...managementModels,
];

// Get patent stats
export const getPatentStats = () => {
  return {
    total: allPatents.length,
    tests: assessmentTests.length,
    systems: technicalSystems.length,
    theorems: theoreticalFrameworks.length,
    models: managementModels.length,
  };
};
