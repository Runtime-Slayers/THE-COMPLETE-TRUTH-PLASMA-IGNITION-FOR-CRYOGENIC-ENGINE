
import type { IgnitionSystem, PlasmaPerformanceData, ComparisonMetric, RealFailure, IgniterTiming, CryogenicEngine, CarrierGas, Cathode, EngineSpec } from './types';

export const ignitionSystems: IgnitionSystem[] = [
  {
    name: "1. TEA-TEB Pyrophoric",
    howItWorks: "Triethylaluminum + Triethylborane burns instantly with oxygen.",
    activationEnergy: "2800 kJ/mol",
    problems: ["Limited supply (can't restart indefinitely)", "highly toxic", "pyrophoric storage hazards"],
    efficiency: "83.1% of thermal baseline",
  },
  {
    name: "2. Spark Plug Electric",
    howItWorks: "High voltage spark (15 kW) heats propellants to ignition temperature.",
    activationEnergy: "3200 kJ/mol",
    problems: ["Corona discharge in vacuum", "spark plug degradation", "high power draw"],
    efficiency: "79.2% of thermal baseline",
  },
  {
    name: "3. Laser Ignition",
    howItWorks: "Focused laser creates plasma hotspot for ignition.",
    activationEnergy: "2400 kJ/mol",
    problems: ["Complex optics", "$25M development cost", "optical access challenges"],
    efficiency: "90.9% of thermal baseline (BEST CURRENT SYSTEM)",
  },
  {
    name: "4. Coil-on-Plug",
    howItWorks: "Combined ignition coil and spark plug eliminates high-voltage cables.",
    activationEnergy: "3000 kJ/mol",
    problems: ["Still suffers vacuum issues", "60ms ignition delay"],
    efficiency: "86.7% of thermal baseline",
  },
];

export const plasmaPerformance: PlasmaPerformanceData[] = [
    {
        fuelSystem: "CH4/LOX System (Your Focus)",
        thermalBaseline: "2648 kJ/mol",
        plasmaPathway: "1041 kJ/mol",
        efficiencyImprovement: "60.7%",
        ignitionDelay: "<1ms (fastest)",
        powerRequirement: "25 kW (moderate)",
    },
    {
        fuelSystem: "LH2/LOX System (Even Better)",
        thermalBaseline: "2456 kJ/mol",
        plasmaPathway: "858 kJ/mol",
        efficiencyImprovement: "65.1%",
    },
    {
        fuelSystem: "RP-1/LOX System (Most Challenging)",
        thermalBaseline: "3200 kJ/mol",
        plasmaPathway: "1760 kJ/mol",
        efficiencyImprovement: "45.0%",
    },
];

export const comparisonMetrics: ComparisonMetric[] = [
    { metric: "Activation Energy Reduction", bestCurrent: "Laser: 9.4%", yourPlasma: "60.7% CH4/LOX", winner: "PLASMA" },
    { metric: "Ignition Speed", bestCurrent: "Hypergolic: 2ms", yourPlasma: "1ms", winner: "PLASMA" },
    { metric: "Restart Capability", bestCurrent: "Electric: Unlimited", yourPlasma: "Unlimited", winner: "TIE" },
    { metric: "Reliability", bestCurrent: "Hypergolic: 99.8%", yourPlasma: "99.8% predicted", winner: "TIE" },
    { metric: "Power Requirements", bestCurrent: "TEA-TEB: 0 kW", yourPlasma: "25 kW", winner: "CURRENT" },
    { metric: "System Complexity", bestCurrent: "TEA-TEB: Low", yourPlasma: "Medium", winner: "CURRENT" },
    { metric: "Development Cost", bestCurrent: "TEA-TEB: $5M", yourPlasma: "$15M estimated", winner: "CURRENT" },
    { metric: "Environmental Safety", bestCurrent: "Electric: Low hazard", yourPlasma: "Low hazard", winner: "TIE" },
];

export const realFailures: RealFailure[] = [
  {
    engine: "Space Shuttle Main Engine (SSME) Development",
    period: "1970s-1980s",
    problem: "Hard starts and combustion instability during development.",
    rootCause: "Uneven fuel/oxidizer mixing during ignition transient.",
    solutionAdopted: "Complex spark ignition with precise timing.",
    howPlasmaHelps: "Instant radical generation ensures uniform ignition from the start.",
  },
  {
    engine: "RL-10 Upper Stage Engine",
    problem: "Restart failures in vacuum conditions.",
    rootCause: "Insufficient ignition energy in the harsh space environment.",
    solutionAdopted: "Improved spark plug design, higher voltage.",
    howPlasmaHelps: "Generates overwhelming ignition energy, works reliably in vacuum.",
  },
  {
    engine: "BE-4 Development Issues",
    period: "2015-2020",
    problem: "Ignition delays during development testing.",
    rootCause: "Methane ignition challenges, TEA-TEB supply optimization issues.",
    solutionAdopted: "Refined TEA-TEB injection system.",
    howPlasmaHelps: "Eliminates TEA-TEB dependency, providing unlimited and instant restarts.",
  }
];

export const igniterTiming: IgniterTiming[] = [
    { stage: "Plasma Formation", time: "0.01 ms", basis: "Electron avalanche" },
    { stage: "O₂ Dissociation", time: "0.1 ms", basis: "O=O bond breaking" },
    { stage: "Radical Generation", time: "1 ms", basis: "O- chemistry initiation" },
    { stage: "Ignition Propagation", time: "5 ms", basis: "Flame front spread" },
    { stage: "Combustion Stabilization", time: "10 ms", basis: "Steady burn establishment" },
    { stage: "TOTAL MINIMUM TIME", time: "16.1 ms", basis: "Sum of all processes" },
    { stage: "RECOMMENDED TIME", time: "50 ms", basis: "Proven reliable operation" },
];

const calculateTWR = (thrustKN: number, weightKG: number) => {
    const thrustN = thrustKN * 1000;
    const weightN = weightKG * 9.81;
    return Math.round(thrustN / weightN);
}

const enginesData: Omit<CryogenicEngine, 'thrustToWeightRatio'>[] = [
  { id: 'Raptor', name: 'SpaceX Raptor', country: 'USA', propellants: 'CH4/LOX', fuel: 'Liquid Methane', oxidizer: 'Liquid Oxygen', chamberPressure: 30, engineCycle: 'Full-Flow Staged Combustion', baseThrust: 2200, baseIsp: 380, dryWeightKg: 1600, diagram: { type: 'staged', nozzleRatio: 1.2 } },
  { id: 'BE-4', name: 'Blue Origin BE-4', country: 'USA', propellants: 'CH4/LOX', fuel: 'Liquid Methane', oxidizer: 'Liquid Oxygen', chamberPressure: 13.4, engineCycle: 'Oxygen-Rich Staged Combustion', baseThrust: 2400, baseIsp: 372, dryWeightKg: 6000, diagram: { type: 'staged', nozzleRatio: 1.15 } },
  { id: 'SSME', name: 'Aerojet Rocketdyne RS-25 (SSME)', country: 'USA', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 22.6, engineCycle: 'Staged Combustion', baseThrust: 2279, baseIsp: 452, dryWeightKg: 3500, diagram: { type: 'staged', nozzleRatio: 1.5 } },
  { id: 'RD-180', name: 'NPO Energomash RD-180', country: 'Russia', propellants: 'RP-1/LOX', fuel: 'RP-1 Kerosene', oxidizer: 'Liquid Oxygen', chamberPressure: 26.7, engineCycle: 'Staged Combustion', baseThrust: 4152, baseIsp: 338, dryWeightKg: 5480, diagram: { type: 'staged', nozzleRatio: 1.0 } },
  { id: 'RD-171M', name: 'NPO Energomash RD-171M', country: 'Russia', propellants: 'RP-1/LOX', fuel: 'RP-1 Kerosene', oxidizer: 'Liquid Oxygen', chamberPressure: 24.5, engineCycle: 'Staged Combustion', baseThrust: 7904, baseIsp: 337, dryWeightKg: 9500, diagram: { type: 'staged', nozzleRatio: 0.9 } },
  { id: 'CE-20', name: 'ISRO CE-20', country: 'India', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 6, engineCycle: 'Gas-Generator', baseThrust: 200, baseIsp: 442, dryWeightKg: 588, diagram: { type: 'gas-generator', nozzleRatio: 1.3 } },
  { id: 'RL-10B-2', name: 'Aerojet Rocketdyne RL-10B-2', country: 'USA', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 4.4, engineCycle: 'Expander Cycle', baseThrust: 110, baseIsp: 466, dryWeightKg: 277, diagram: { type: 'gas-generator', nozzleRatio: 1.6 } },
  { id: 'RD-0120', name: 'KBKhA RD-0120', country: 'Russia', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 21.8, engineCycle: 'Staged Combustion', baseThrust: 2000, baseIsp: 455, dryWeightKg: 3450, diagram: { type: 'staged', nozzleRatio: 1.4 } },
  { id: 'LE-5B', name: 'MHI LE-5B', country: 'Japan', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 3.6, engineCycle: 'Expander Bleed Cycle', baseThrust: 137, baseIsp: 448, dryWeightKg: 285, diagram: { type: 'gas-generator', nozzleRatio: 1.45 } },
  { id: 'F-1', name: 'Rocketdyne F-1', country: 'USA', propellants: 'RP-1/LOX', fuel: 'RP-1 Kerosene', oxidizer: 'Liquid Oxygen', chamberPressure: 9.7, engineCycle: 'Gas-Generator', baseThrust: 7740, baseIsp: 304, dryWeightKg: 8400, diagram: { type: 'gas-generator', nozzleRatio: 0.8 } },
  { id: 'M1D-Vac', name: 'SpaceX Merlin 1D (Vac)', country: 'USA', propellants: 'RP-1/LOX', fuel: 'RP-1 Kerosene', oxidizer: 'Liquid Oxygen', chamberPressure: 9.7, engineCycle: 'Gas-Generator', baseThrust: 981, baseIsp: 348, dryWeightKg: 470, diagram: { type: 'gas-generator', nozzleRatio: 1.65 } },
  { id: 'Vulcain-2.1', name: 'ArianeGroup Vulcain 2.1', country: 'Europe', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 11.7, engineCycle: 'Gas-Generator', baseThrust: 1340, baseIsp: 432, dryWeightKg: 2100, diagram: { type: 'gas-generator', nozzleRatio: 1.35 } },
  { id: 'Vinci', name: 'ArianeGroup Vinci', country: 'Europe', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 6.1, engineCycle: 'Expander Cycle', baseThrust: 180, baseIsp: 465, dryWeightKg: 550, diagram: { type: 'gas-generator', nozzleRatio: 1.7 } },
  { id: 'RD-191', name: 'NPO Energomash RD-191', country: 'Russia', propellants: 'RP-1/LOX', fuel: 'RP-1 Kerosene', oxidizer: 'Liquid Oxygen', chamberPressure: 25.8, engineCycle: 'Staged Combustion', baseThrust: 2085, baseIsp: 337, dryWeightKg: 2200, diagram: { type: 'staged', nozzleRatio: 1.05 } },
  { id: 'NK-33', name: 'Kuznetsov NK-33', country: 'Russia', propellants: 'RP-1/LOX', fuel: 'RP-1 Kerosene', oxidizer: 'Liquid Oxygen', chamberPressure: 14.5, engineCycle: 'Staged Combustion', baseThrust: 1687, baseIsp: 331, dryWeightKg: 1225, diagram: { type: 'staged', nozzleRatio: 1.1 } },
  { id: 'YF-100', name: 'CASC YF-100', country: 'China', propellants: 'RP-1/LOX', fuel: 'RP-1 Kerosene', oxidizer: 'Liquid Oxygen', chamberPressure: 18.0, engineCycle: 'Staged Combustion', baseThrust: 1200, baseIsp: 335, dryWeightKg: 1890, diagram: { type: 'staged', nozzleRatio: 1.0 } },
  { id: 'YF-77', name: 'CASC YF-77', country: 'China', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 10.2, engineCycle: 'Gas-Generator', baseThrust: 700, baseIsp: 438, dryWeightKg: 1350, diagram: { type: 'gas-generator', nozzleRatio: 1.4 } },
  { id: 'YF-115', name: 'CASC YF-115', country: 'China', propellants: 'RP-1/LOX', fuel: 'RP-1 Kerosene', oxidizer: 'Liquid Oxygen', chamberPressure: 12.2, engineCycle: 'Staged Combustion', baseThrust: 182, baseIsp: 341, dryWeightKg: 330, diagram: { type: 'staged', nozzleRatio: 1.55 } },
  { id: 'LE-7A', name: 'MHI LE-7A', country: 'Japan', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 12.3, engineCycle: 'Staged Combustion', baseThrust: 1098, baseIsp: 440, dryWeightKg: 1815, diagram: { type: 'staged', nozzleRatio: 1.4 } },
  { id: 'LE-9', name: 'MHI LE-9', country: 'Japan', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 10.0, engineCycle: 'Expander Bleed Cycle', baseThrust: 1471, baseIsp: 426, dryWeightKg: 2400, diagram: { type: 'gas-generator', nozzleRatio: 1.3 } },
  { id: 'BE-3U', name: 'Blue Origin BE-3U', country: 'USA', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 8.0, engineCycle: 'Expander Bleed Cycle', baseThrust: 710, baseIsp: 450, dryWeightKg: 1000, diagram: { type: 'gas-generator', nozzleRatio: 1.6 } },
  { id: 'J-2X', name: 'Aerojet Rocketdyne J-2X', country: 'USA', propellants: 'LH2/LOX', fuel: 'Liquid Hydrogen', oxidizer: 'Liquid Oxygen', chamberPressure: 15.2, engineCycle: 'Gas-Generator', baseThrust: 1310, baseIsp: 448, dryWeightKg: 2477, diagram: { type: 'gas-generator', nozzleRatio: 1.5 } },
];

export const ENGINES: CryogenicEngine[] = enginesData.map(e => ({
    ...e,
    thrustToWeightRatio: calculateTWR(e.baseThrust, e.dryWeightKg),
}));


export const CARRIER_GASES: CarrierGas[] = [
  { id: 'argon', name: 'Argon (Baseline)', description: 'Creates initial electron avalanche. Standard and reliable.', efficiencyFactor: 1.0 },
  { id: 'argon_h2_80_20', name: 'Argon/H₂ Mix (80/20)', description: 'Provides additional electrons AND enhances combustion.', efficiencyFactor: 1.15 },
  { id: 'argon_h2_50_50', name: 'Argon/H₂ Mix (50/50)', description: 'Even more H₂ for maximum combustion enhancement.', efficiencyFactor: 1.25 },
  { id: 'hydrogen_ar_80_20', name: 'Hydrogen/Ar Mix (80/20)', description: 'Primarily Hydrogen for chemical enhancement, with Argon for easier initial ionization.', efficiencyFactor: 1.30 },
  { id: 'hydrogen', name: 'Pure Hydrogen', description: 'Highest chemical potential, but harder to ionize.', efficiencyFactor: 1.35 },
  { id: 'helium', name: 'Helium', description: 'Inert and stable, but less effective for radical generation.', efficiencyFactor: 0.95 },
  { id: 'xenon', name: 'Xenon', description: 'Heavy and easy to ionize, but very expensive.', efficiencyFactor: 1.05 },
  { id: 'air', name: 'Plain Air (N₂/O₂)', description: 'Cheap and available, but Nitrogen can form undesirable NOx byproducts.', efficiencyFactor: 0.85 },
];

export const CATHODES: Cathode[] = [
    { id: 'tungsten', name: 'Tungsten (Standard)', description: 'A robust, high-temperature material. The industry baseline.', efficiencyFactor: 1.0 },
    { id: 'molybdenum', name: 'Molybdenum', description: 'A refractory metal similar to tungsten but with a slightly lower work function, offering a modest performance improvement.', efficiencyFactor: 1.02 },
    { id: 'thoriated_tungsten', name: 'Thoriated Tungsten', description: 'Tungsten doped with thorium, lowering its work function for easier electron emission.', efficiencyFactor: 1.04 },
    { id: 'hafnium', name: 'Hafnium (Durable)', description: 'Hafnium-based emitter known for its high durability and resistance to ion bombardment. A rugged, long-life option.', efficiencyFactor: 1.06 },
    { id: 'lab6', name: 'LaB₆ (Lanthanum Hexaboride)', description: 'An advanced ceramic with a very low work function and high melting point. Excellent emitter.', efficiencyFactor: 1.08 },
    { id: 'ceb6', name: 'CeB₆ (Cerium Hexaboride)', description: 'Similar to LaB₆, offering superior electron emissivity and a long operational life.', efficiencyFactor: 1.12 },
    { id: 'scandate', name: 'B-type Scandate', description: 'Barium-scandate dispenser cathode. State-of-the-art for high current density emission.', efficiencyFactor: 1.15 },
    { id: 'cesiated_tungsten', name: 'Cesiated Tungsten', description: 'Tungsten with a monolayer of cesium, offering an extremely low work function for excellent emission, though with a shorter lifespan.', efficiencyFactor: 1.18 },
    { id: 'oxide_coated', name: 'BaO/SrO/Y2O3 Coated', description: 'Tungsten coated with a mix of Barium, Strontium, and Yttrium oxides. Provides very high emission at lower temperatures.', efficiencyFactor: 1.20 },
];

export const engineSpecs: EngineSpec[] = [
  { engine: 'CE-20', country: 'India (ISRO)', propellants: 'LH₂/LOX', baseThrust: '200 kN', enhancedThrust: '225 kN', thrustGain: '+12.3%', baseISP: '442s', enhancedISP: '465s', ispGain: '+23s' },
  { engine: 'RL-10B-2', country: 'USA (Aerojet)', propellants: 'LH₂/LOX', baseThrust: '110 kN', enhancedThrust: '119 kN', thrustGain: '+8.1%', baseISP: '466s', enhancedISP: '488s', ispGain: '+22s' },
  { engine: 'SSME/RS-25', country: 'USA (Aerojet)', propellants: 'LH₂/LOX', baseThrust: '2279 kN', enhancedThrust: '2831 kN', thrustGain: '+24.2%', baseISP: '452s', enhancedISP: '477s', ispGain: '+25s' },
  { engine: 'RD-0120', country: 'Russia', propellants: 'LH₂/LOX', baseThrust: '200 kN', enhancedThrust: '248 kN', thrustGain: '+24.2%', baseISP: '455s', enhancedISP: '480s', ispGain: '+25s' },
  { engine: 'LE-5B', country: 'Japan (MHI)', propellants: 'LH₂/LOX', baseThrust: '137 kN', enhancedThrust: '151 kN', thrustGain: '+9.7%', baseISP: '448s', enhancedISP: '470s', ispGain: '+22s' },
  { engine: 'Raptor', country: 'USA (SpaceX)', propellants: 'CH₄/LOX', baseThrust: '2200 kN', enhancedThrust: '2707 kN', thrustGain: '+23.0%', baseISP: '380s', enhancedISP: '401s', ispGain: '+21s' },
  { engine: 'BE-4', country: 'USA (Blue Origin)', propellants: 'CH₄/LOX', baseThrust: '2400 kN', enhancedThrust: '2861 kN', thrustGain: '+19.2%', baseISP: '372s', enhancedISP: '392s', ispGain: '+20s' },
  { engine: 'RD-180', country: 'Russia', propellants: 'RP-1/LOX', baseThrust: '4152 kN', enhancedThrust: '5014 kN', thrustGain: '+20.8%', baseISP: '338s', enhancedISP: '353s', ispGain: '+15s' },
  { engine: 'RD-171M', country: 'Russia', propellants: 'RP-1/LOX', baseThrust: '7904 kN', enhancedThrust: '9544 kN', thrustGain: '+20.8%', baseISP: '337s', enhancedISP: '352s', ispGain: '+15s' },
];
