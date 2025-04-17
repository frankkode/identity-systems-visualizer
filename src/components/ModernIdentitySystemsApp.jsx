import React, { useState, useEffect } from 'react';
import ScreenSizeNotification from './ScreenSizeNotification';
import Footer from './Footer';
import ResponsiveNavbar from './ResponsiveNavbar';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, AreaChart, Area
} from 'recharts';

const ModernIdentitySystemsApp = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [activeSystem, setActiveSystem] = useState('comparison');
  const [animateFlow, setAnimateFlow] = useState(false);
  const [animationStep, setAnimationStep] = useState(0); // Animation step state
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [detailContent, setDetailContent] = useState({});
  
  // Animation effect
  useEffect(() => {
    let animationTimer;
    if (animateFlow && architectures[activeSystem]) {
      const flows = architectures[activeSystem].flows;
      if (flows && flows.length > 0) {
        animationTimer = setInterval(() => {
          setAnimationStep(prev => (prev < flows.length - 1 ? prev + 1 : 0));
        }, 2000); // Slow animation - changes every 2 seconds
      }
    } else {
      setAnimationStep(0);
    }
    
    return () => {
      if (animationTimer) clearInterval(animationTimer);
    };
  }, [animateFlow, activeSystem]);
  
  // Simulated benchmark data
  const benchmarkData = [
    { metric: 'Query Response Time (ms)', traditional: 12, blockchain: 187, hybrid: 45 },
    { metric: 'Write Operation (ms)', traditional: 25, blockchain: 210, hybrid: 80 },
    { metric: 'Storage Efficiency', traditional: 85, blockchain: 40, hybrid: 72 },
    { metric: 'Breach Resistance Score', traditional: 45, blockchain: 92, hybrid: 80 },
    { metric: 'Tx Throughput (tps)', traditional: 10000, blockchain: 100, hybrid: 5000 }
  ];
  
  // Adoption forecast data
  const adoptionData = [
    { year: 2022, traditional: 75, blockchain: 10, hybrid: 15 },
    { year: 2023, traditional: 68, blockchain: 15, hybrid: 17 },
    { year: 2024, traditional: 60, blockchain: 18, hybrid: 22 },
    { year: 2025, traditional: 53, blockchain: 20, hybrid: 27 },
    { year: 2026, traditional: 45, blockchain: 22, hybrid: 33 },
    { year: 2027, traditional: 38, blockchain: 25, hybrid: 37 },
    { year: 2028, traditional: 32, blockchain: 28, hybrid: 40 }
  ];
  
  // Security incident data
  const securityData = [
    { year: 2020, traditional: 125, blockchain: 12, hybrid: 30 },
    { year: 2021, traditional: 140, blockchain: 14, hybrid: 32 },
    { year: 2022, traditional: 152, blockchain: 15, hybrid: 33 },
    { year: 2023, traditional: 165, blockchain: 18, hybrid: 36 },
    { year: 2024, traditional: 180, blockchain: 22, hybrid: 40 }
  ];
  
  // Comparative radar chart data
  const radarData = [
    { category: 'Security', traditional: 60, blockchain: 90, hybrid: 85 },
    { category: 'Privacy', traditional: 50, blockchain: 95, hybrid: 80 },
    { category: 'Scalability', traditional: 90, blockchain: 40, hybrid: 75 },
    { category: 'Interoperability', traditional: 70, blockchain: 30, hybrid: 85 },
    { category: 'Cost-Efficiency', traditional: 85, blockchain: 40, hybrid: 70 },
    { category: 'UX Simplicity', traditional: 80, blockchain: 40, hybrid: 65 },
    { category: 'Regulatory Compliance', traditional: 90, blockchain: 50, hybrid: 80 },
    { category: 'Decentralization', traditional: 10, blockchain: 95, hybrid: 60 },
  ];
  
  // Architecture components
  const architectures = {
    traditional: {
      name: "Traditional Identity System",
      description: "Centralized architecture with trusted authorities managing identity data and authentication processes.",
      components: [
        { id: 'user', name: 'User', type: 'actor', x: 20, y: 50, width: 60, height: 60 },
        { id: 'app', name: 'Application', type: 'interface', x: 150, y: 50, width: 120, height: 60 },
        { id: 'idp', name: 'Identity Provider', type: 'service', x: 340, y: 50, width: 120, height: 60 },
        { id: 'db', name: 'Central Database', type: 'storage', x: 520, y: 50, width: 120, height: 60 },
        { id: 'admin', name: 'Admin', type: 'actor', x: 520, y: 180, width: 60, height: 60 }
      ],
      flows: [
        { id: 'f1', from: 'user', to: 'app', label: '1. Request Access' },
        { id: 'f2', from: 'app', to: 'idp', label: '2. Auth Request' },
        { id: 'f3', from: 'idp', to: 'db', label: '3. Verify Identity' },
        { id: 'f4', from: 'db', to: 'idp', label: '4. Confirm Identity' },
        { id: 'f5', from: 'idp', to: 'app', label: '5. Auth Response' },
        { id: 'f6', from: 'app', to: 'user', label: '6. Grant Access' },
        { id: 'f7', from: 'admin', to: 'db', label: 'Manages' }
      ],
      keyPoints: [
        "Centralized control by trusted identity providers",
        "Efficient for high-volume transactions",
        "Vulnerable to single point of failure attacks",
        "Limited user control over personal data",
        "Established regulatory frameworks"
      ]
    },
    blockchain: {
      name: "Blockchain-based Identity System",
      description: "Decentralized architecture using distributed ledger technology for identity verification without central authorities.",
      components: [
        { id: 'user', name: 'User', type: 'actor', x: 20, y: 50, width: 60, height: 60 },
        { id: 'wallet', name: 'Digital Wallet', type: 'interface', x: 150, y: 50, width: 120, height: 60 },
        { id: 'verifier', name: 'Verifier App', type: 'interface', x: 340, y: 50, width: 120, height: 60 },
        { id: 'blockchain', name: 'Blockchain Network', type: 'network', x: 150, y: 180, width: 310, height: 60 },
        { id: 'issuer', name: 'Credential Issuer', type: 'service', x: 520, y: 50, width: 120, height: 60 }
      ],
      flows: [
        { id: 'f1', from: 'user', to: 'wallet', label: '1. Controls' },
        { id: 'f2', from: 'wallet', to: 'blockchain', label: '2. Register DID' },
        { id: 'f3', from: 'issuer', to: 'wallet', label: '3. Issue Credential' },
        { id: 'f4', from: 'wallet', to: 'verifier', label: '4. Present Proof' },
        { id: 'f5', from: 'verifier', to: 'blockchain', label: '5. Verify Credential' },
        { id: 'f6', from: 'blockchain', to: 'verifier', label: '6. Confirm Validity' }
      ],
      keyPoints: [
        "No central authority or single point of failure",
        "Self-sovereign identity control for users",
        "Immutable credential verification",
        "Enhanced privacy through selective disclosure",
        "Higher latency for transaction processing",
        "Challenges with scalability and energy consumption"
      ]
    },
    hybrid: {
      name: "Hybrid Identity System",
      description: "Combines elements of both traditional and blockchain approaches to optimize for security, scalability, and user control.",
      components: [
        { id: 'user', name: 'User', type: 'actor', x: 20, y: 50, width: 60, height: 60 },
        { id: 'wallet', name: 'Digital Wallet', type: 'interface', x: 150, y: 50, width: 120, height: 60 },
        { id: 'app', name: 'Application', type: 'interface', x: 340, y: 50, width: 120, height: 60 },
        { id: 'idp', name: 'Identity Provider', type: 'service', x: 520, y: 50, width: 120, height: 60 },
        { id: 'blockchain', name: 'Blockchain Attestations', type: 'network', x: 150, y: 180, width: 200, height: 60 },
        { id: 'db', name: 'Protected Database', type: 'storage', x: 440, y: 180, width: 120, height: 60 },
        { id: 'bridge', name: 'Interoperability Bridge', type: 'service', x: 340, y: 120, width: 120, height: 40 }
      ],
      flows: [
        { id: 'f1', from: 'user', to: 'wallet', label: '1. Controls' },
        { id: 'f2', from: 'wallet', to: 'blockchain', label: '2. Anchors Identity' },
        { id: 'f3', from: 'wallet', to: 'app', label: '3. Present Proof' },
        { id: 'f4', from: 'app', to: 'bridge', label: '4. Verify' },
        { id: 'f5', from: 'bridge', to: 'blockchain', label: '5a. Check DID' },
        { id: 'f6', from: 'bridge', to: 'db', label: '5b. Check Claims' },
        { id: 'f7', from: 'bridge', to: 'app', label: '6. Confirm Validity' },
        { id: 'f8', from: 'idp', to: 'db', label: 'Manages' }
      ],
      keyPoints: [
        "Balances decentralization with performance needs",
        "Selective use of blockchain for integrity verification",
        "Traditional components for high-throughput operations",
        "Improved regulatory compliance over pure blockchain",
        "Better user control than traditional systems",
        "Complex integration requirements"
      ]
    }
  };
  
  const useCases = [
    {
      id: 'healthcare',
      name: 'Healthcare Identity Management',
      systemType: 'hybrid',
      description: (
        <>
          Patient identity and medical record access management across healthcare providers.
          <br /><br />
          <span className="text-gray-600 italic text-sm">
            Note: You may need to scroll down to see the metric tables based on your device.
          </span>
        </>
      ),
      challenges: [
        'Strict privacy requirements (HIPAA, GDPR)',
        'Need for immediate access in emergency scenarios',
        'Cross-provider data sharing with consent'
      ],
      benefits: [
        'Selective disclosure of medical information',
        'Patient-controlled access management',
        'Immutable audit trail for compliance'
      ],
      metrics: {
        security: 88,
        privacy: 92,
        scalability: 74,
        interoperability: 85,
        costEfficiency: 65
      }
    },
    {
      id: 'finance',
      name: 'Financial Services KYC',
      systemType: 'traditional',
      description: (
        <>
          Customer identity verification for financial services and anti-money laundering compliance.
          <br /><br />
          <span className="text-gray-600 italic text-sm">
            Note: You may need to scroll down to see the metric tables based on your device.
          </span>
        </>
      ),
      challenges: [
        'Strict regulatory requirements',
        'High volume of transactions',
        'Legacy system integration'
      ],
      benefits: [
        'Established compliance frameworks',
        'High transaction throughput',
        'Centralized monitoring and control'
      ],
      metrics: {
        security: 82,
        privacy: 65,
        scalability: 90,
        interoperability: 60,
        costEfficiency: 75
      }
    },
    {
      id: 'digital-citizenship',
      name: 'National Digital Identity',
      systemType: 'blockchain',
      description:  (
        <>
          Sovereign digital identity system for citizens to access government services and prove identity.
          <br /><br />
          <span className="text-gray-600 italic text-sm">
            Note: You may need to scroll down to see the metric tables based on your device.
          </span>
        </>
      ),
      challenges: [
        'Universal accessibility requirements',
        'Long-term identity persistence needs',
        'Integration with international systems'
      ],
      benefits: [
        'Reduced identity fraud',
        'Cross-border verification',
        'Transparent governance'
      ],
      metrics: {
        security: 90,
        privacy: 85,
        scalability: 60,
        interoperability: 70,
        costEfficiency: 55
      }
    }
  ];
  
  // Enhanced architecture diagram rendering with animations
  const renderArchitectureDiagram = (type) => {
    const architecture = architectures[type];
    if (!architecture) return null;
    
    // Component type styling
    const componentStyles = {
      actor: "bg-purple-100 border-purple-400",
      interface: "bg-blue-100 border-blue-400",
      service: "bg-green-100 border-green-400",
      storage: "bg-yellow-100 border-yellow-400",
      network: "bg-red-100 border-red-400"
    };
    
    // Calculate responsive positions based on percentage
    const getResponsivePosition = (component) => {
      // Convert absolute positions to percentages
      const percentX = (component.x / 600) * 100; // Base on 600px width
      
      return {
        left: `${percentX}%`,
        top: component.y,
        width: component.width,
        height: component.height
      };
    };
    
    // Arrow rendering with animation
    const renderArrow = (flow, index) => {
      // Find source and target components
      const sourceComp = architecture.components.find(c => c.id === flow.from);
      const targetComp = architecture.components.find(c => c.id === flow.to);
      
      if (!sourceComp || !targetComp) return null;
      
      // Calculate positions as percentages for responsiveness
      const sourcePercentX = (sourceComp.x / 600) * 100;
      const targetPercentX = (targetComp.x / 600) * 100;
      const midPercentX = (sourcePercentX + targetPercentX) / 2;
      
      // Midpoint Y position
      const midY = (sourceComp.y + targetComp.y) / 2;
      
      // Animated styling based on current step
      const isActiveStep = animateFlow && (index === animationStep);
      const isCompletedStep = animateFlow && (index < animationStep);
      
      let textColorClass = 'text-gray-500';
      if (isActiveStep) textColorClass = 'text-blue-600 font-bold';
      else if (isCompletedStep) textColorClass = 'text-green-600';
      
      return (
        <div 
          key={flow.id}
          className={`absolute text-xs font-medium transition-all duration-700 ${textColorClass}`}
          style={{
            left: `${midPercentX}%`,
            top: midY,
            transform: isActiveStep ? 'scale(1.2) translate(-42%, -50%)' : 'translate(-50%, -50%)',
            zIndex: isActiveStep ? 30 : 20
          }}
        >
          <div className={`px-2 py-1 rounded-full ${isActiveStep ? 'bg-blue-50 shadow-md border border-blue-200' : 'bg-white bg-opacity-80'}`}>
            {flow.label}
          </div>
        </div>
      );
    };
    
    return (
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-xl font-semibold mb-2 sm:mb-0">{architecture.name}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">
              {animateFlow ? `Step ${animationStep + 1}/${architecture.flows.length}` : 'Static View'}
            </span>
            <button 
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                animateFlow 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
              }`}
              onClick={() => setAnimateFlow(!animateFlow)}
            >
              {animateFlow ? 'Stop Animation' : 'Animate Data Flow'}
            </button>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{architecture.description}</p>
        
        <div className="relative border bg-white border-gray-200 rounded-xl h-64 sm:h-72 md:h-80 overflow-hidden shadow-md mb-4">
          {/* SVG connection lines with animation */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
            {architecture.flows.map((flow, idx) => {
              const sourceComp = architecture.components.find(c => c.id === flow.from);
              const targetComp = architecture.components.find(c => c.id === flow.to);
              
              if (!sourceComp || !targetComp) return null;
              
              // Calculate source and target positions as percentages
              const sourceX = (sourceComp.x / 600) * 100;
              const sourceY = sourceComp.y + (sourceComp.height / 2);
              const targetX = (targetComp.x / 600) * 100;
              const targetY = targetComp.y + (targetComp.height / 2);
              
              // Animation styling based on current step
              const isActiveStep = animateFlow && (idx === animationStep);
              const isCompletedStep = animateFlow && (idx < animationStep);
              
              // Line styling based on animation state
              let strokeColor = "#d1d5db"; // Default gray
              let strokeWidth = 1;
              let dashArray = "";
              
              if (isActiveStep) {
                strokeColor = "#4f46e5"; // Indigo for active
                strokeWidth = 3;
                dashArray = "5,3";
              } else if (isCompletedStep) {
                strokeColor = "#10b981"; // Green for completed
                strokeWidth = 2;
              }
              
              return (
                <g key={`line-${idx}`}>
                  <line
                    x1={`${sourceX}%`}
                    y1={sourceY}
                    x2={`${targetX}%`}
                    y2={targetY}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={dashArray}
                    className={isActiveStep ? "animate-pulse" : ""}
                  />
                  
                  {/* Animated data flow particle (only shown for active step) */}
                  {isActiveStep && (
                    <>
                      <circle 
                        cx={`${sourceX}%`} 
                        cy={sourceY} 
                        r="4" 
                        fill="#4f46e5" 
                        className="animate-ping"
                      />
                      
                      <circle 
                        cx={`${targetX}%`} 
                        cy={targetY} 
                        r="4" 
                        fill="#4f46e5" 
                        className="animate-ping" 
                        style={{ animationDelay: "0.5s" }}
                      />
                    </>
                  )}
                </g>
              );
            })}
          </svg>
          
          {/* Components with responsive positioning and active highlighting */}
          {architecture.components.map(component => {
            // Determine if this component is active in the current step
            const isInvolvedInCurrentStep = animateFlow && architecture.flows[animationStep] && 
              (architecture.flows[animationStep].from === component.id || 
               architecture.flows[animationStep].to === component.id);
            
            return (
              <div 
                key={component.id}
                className={`absolute ${componentStyles[component.type]} border rounded-lg p-2 shadow-sm 
                  transform transition-all duration-700 overflow-hidden
                  ${isInvolvedInCurrentStep ? 'ring-2 ring-blue-400 shadow-lg scale-105 z-20' : ''}
                  ${animateFlow ? 'hover:scale-105 hover:shadow-md' : ''}
                `}
                style={getResponsivePosition(component)}
              >
                <div className={`font-medium text-sm truncate ${isInvolvedInCurrentStep ? 'text-blue-700' : ''}`}>
                  {component.name}
                </div>
                <div className="text-xs opacity-70 hidden sm:block">{component.type}</div>
              </div>
            );
          })}
          
          {/* Flow arrows with animation */}
          {architecture.flows.map(renderArrow)}
        </div>
        
        {/* Animation progress indicator */}
        {animateFlow && (
          <div className="bg-blue-50 p-3 rounded-lg mb-4 text-sm">
            <div className="font-medium text-blue-800 mb-2">Animation Progress:</div>
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              {architecture.flows.map((flow, idx) => (
                <div 
                  key={idx} 
                  className={`px-2 py-1 rounded-full text-xs whitespace-nowrap
                    ${idx === animationStep 
                      ? 'bg-blue-100 text-blue-800 border border-blue-300 font-medium' 
                      : idx < animationStep 
                        ? 'bg-green-100 text-green-800 border border-green-300' 
                        : 'bg-gray-100 text-gray-600 border border-gray-200'
                    }`}
                >
                  {flow.label.replace(/^[0-9]+\.?\s?/, '')}
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Key Characteristics</h4>
          <ul className="space-y-1">
            {architecture.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                <span className="text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  // Function to open detail panel
  const openDetailPanel = (content) => {
    setDetailContent(content);
    setShowDetailPanel(true);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top navigation */}
      <nav className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
      <ResponsiveNavbar activeView={activeView} setActiveView={setActiveView} />
      </nav>
      {/* guide screen */}
      <ScreenSizeNotification setActiveView={setActiveView} />
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Overview cards */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transform transition-all hover:shadow-md">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Security Comparison</div>
                    <div className="mt-1 flex items-baseline">
                      <div className="text-2xl font-semibold">Traditional: 60%</div>
                    </div>
                    <div className="text-sm text-green-600 font-medium">Blockchain: +30% improvement</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transform transition-all hover:shadow-md">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-green-100 text-green-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Performance Metrics</div>
                    <div className="mt-1 flex items-baseline">
                      <div className="text-2xl font-semibold">Traditional: 10K TPS</div>
                    </div>
                    <div className="text-sm text-red-600 font-medium">Blockchain: -99% slower</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transform transition-all hover:shadow-md">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-purple-100 text-purple-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Implementation Cost</div>
                    <div className="mt-1 flex items-baseline">
                      <div className="text-2xl font-semibold">Traditional: $</div>
                    </div>
                    <div className="text-sm text-red-600 font-medium">Blockchain: +85% higher</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Charts */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-lg font-medium mb-4">Identity System Adoption Forecast</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={adoptionData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="traditional" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="blockchain" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="hybrid" stackId="1" stroke="#ffc658" fill="#ffc658" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-lg font-medium mb-4">Security Incidents by System Type</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={securityData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="traditional" stroke="#8884d8" />
                    <Line type="monotone" dataKey="blockchain" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="hybrid" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 mt-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 overflow-hidden">
                <h2 className="text-lg font-medium mb-4">Performance Benchmark Comparison</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={benchmarkData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 120, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="metric" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="traditional" fill="#8884d8" />
                    <Bar dataKey="blockchain" fill="#82ca9d" />
                    <Bar dataKey="hybrid" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
        
        {activeView === 'architectures' && (
          <div className="space-y-8">
            {/* Show on mobile only */}
    <div className="sm:hidden bg-blue-50 p-4 rounded-lg mb-4 border border-blue-100">
      <p className="text-sm text-blue-700">
        <span className="font-medium">Tip:</span> For the best experience with animated visualizations, 
        try viewing on a larger screen or rotate your device to landscape mode.
      </p>
    </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold mb-6">System Architecture Comparison</h2>
              
              <div className="flex space-x-4 mb-6">
                <button 
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${activeSystem === 'traditional' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveSystem('traditional')}
                >
                  Traditional
                </button>
                <button 
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${activeSystem === 'blockchain' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveSystem('blockchain')}
                >
                  Blockchain
                </button>
                <button 
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${activeSystem === 'hybrid' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveSystem('hybrid')}
                >
                  Hybrid
                </button>
              </div>
              
              {renderArchitectureDiagram(activeSystem)}
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Architecture Component Legend</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-100 border border-purple-400 rounded mr-2"></div>
                  <span className="text-sm">Actor</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-100 border border-blue-400 rounded mr-2"></div>
                  <span className="text-sm">Interface</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-100 border border-green-400 rounded mr-2"></div>
                  <span className="text-sm">Service</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-100 border border-yellow-400 rounded mr-2"></div>
                  <span className="text-sm">Storage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-100 border border-red-400 rounded mr-2"></div>
                  <span className="text-sm">Network</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeView === 'comparison' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">System Comparison Radar</h2>
              <p className="text-gray-600 mb-4">
                This radar chart visualizes how traditional, blockchain-based, and hybrid identity systems 
                compare across key evaluation criteria. Higher values indicate better performance.
              </p>
              
              <div className="flex space-x-4 mb-4">
                <button 
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${activeSystem === 'comparison' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveSystem('comparison')}
                >
                  All Systems
                </button>
                <button 
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${activeSystem === 'traditional' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveSystem('traditional')}
                >
                  Traditional
                </button>
                <button 
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${activeSystem === 'blockchain' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveSystem('blockchain')}
                >
                  Blockchain
                </button>
                <button 
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${activeSystem === 'hybrid' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveSystem('hybrid')}
                >
                  Hybrid
                </button>
              </div>
              
              <ResponsiveContainer width="100%" height={500}>
                <RadarChart data={radarData} margin={{ top: 20, right: 30, bottom: 30, left: 30 }}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  
                  {(activeSystem === 'comparison' || activeSystem === 'traditional') && (
                    <Radar name="Traditional" dataKey="traditional" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
                  )}
                  
                  {(activeSystem === 'comparison' || activeSystem === 'blockchain') && (
                    <Radar name="Blockchain" dataKey="blockchain" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.2} />
                  )}
                  
                  {(activeSystem === 'comparison' || activeSystem === 'hybrid') && (
                    <Radar name="Hybrid" dataKey="hybrid" stroke="#ffc658" fill="#ffc658" fillOpacity={0.2} />
                  )}
                  
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h3 className="text-lg font-medium">Traditional Systems</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Strengths</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">Mature infrastructure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">High transaction throughput</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">Low operational costs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">Established regulatory frameworks</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Weaknesses</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm">Centralized security risks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm">Limited user data control</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm">Single points of failure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="text-lg font-medium">Blockchain Systems</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Strengths</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">Decentralized architecture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">Self-sovereign identity control</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">Tamper-evident records</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">Enhanced privacy capabilities</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Weaknesses</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm">Limited transaction throughput</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm">Higher implementation costs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm">Regulatory compliance challenges</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <h3 className="text-lg font-medium">Hybrid Systems</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Strengths</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">Balanced security approach</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">Improved interoperability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">Enhanced privacy with performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">Better regulatory adaptability</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Weaknesses</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm">Integration complexity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm">Higher initial development costs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm">More complex governance model</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeView === 'usecases' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map(useCase => (
                <div 
                  key={useCase.id}
                  className={`bg-white rounded-xl shadow-sm border transform transition-all duration-200 hover:shadow-md cursor-pointer ${
                    activeSystem === useCase.id ? 'border-indigo-300 ring-2 ring-indigo-200' : 'border-gray-100'
                  }`}
                  onClick={() => {
                    setActiveSystem(useCase.id);
                    openDetailPanel(useCase);
                  }}
                >
                  <div className="p-6">
                    <div className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-3 ${
                      useCase.systemType === 'traditional' ? 'bg-purple-100 text-purple-700' :
                      useCase.systemType === 'blockchain' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {useCase.systemType.charAt(0).toUpperCase() + useCase.systemType.slice(1)} System
                    </div>
                    <h3 className="text-lg font-medium mb-2">{useCase.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{useCase.description}</p>
                    
                    <div className="flex space-x-1 mb-4">
                      {Object.keys(useCase.metrics).map(metric => (
                        <div 
                          key={metric}
                          className="flex-1 bg-gray-100 rounded-lg p-2 text-center"
                          title={`${metric.charAt(0).toUpperCase() + metric.slice(1).replace(/([A-Z])/g, ' $1')}: ${useCase.metrics[metric]}/100`}
                        >
                          <div className="text-xs text-gray-500">{metric.charAt(0).toUpperCase()}</div>
                          <div className="font-medium">{useCase.metrics[metric]}</div>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      className="w-full px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {activeSystem !== 'comparison' && activeSystem !== 'traditional' && activeSystem !== 'blockchain' && activeSystem !== 'hybrid' && (
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">
                  Use Case Analysis: {useCases.find(uc => uc.id === activeSystem)?.name}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Key Challenges</h3>
                    <ul className="space-y-2">
                      {useCases.find(uc => uc.id === activeSystem)?.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start bg-red-50 rounded-lg p-3">
                          <span className="text-red-500 mr-2">⚠</span>
                          <span className="text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Key Benefits</h3>
                    <ul className="space-y-2">
                      {useCases.find(uc => uc.id === activeSystem)?.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start bg-green-50 rounded-lg p-3">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <h3 className="font-medium text-gray-700 mb-3">Performance Metrics</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      data={Object.entries(useCases.find(uc => uc.id === activeSystem)?.metrics || {}).map(([key, value]) => ({
                        name: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
                        value
                      }))}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Bar 
                        dataKey="value" 
                        fill={
                          useCases.find(uc => uc.id === activeSystem)?.systemType === 'traditional' ? '#8884d8' :
                          useCases.find(uc => uc.id === activeSystem)?.systemType === 'blockchain' ? '#82ca9d' : '#ffc658'
                        } 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
            
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
              <h2 className="text-xl font-semibold mb-4">Implementation Recommendations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium text-gray-800 mb-2">Healthcare Sector</h3>
                  <p className="text-sm mb-3">Best approach: <span className="font-medium text-yellow-600">Hybrid System</span></p>
                  <p className="text-sm text-gray-600">
                    Balance privacy requirements with interoperability needs while maintaining regulatory compliance.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium text-gray-800 mb-2">Financial Services</h3>
                  <p className="text-sm mb-3">Best approach: <span className="font-medium text-purple-600">Traditional with Blockchain elements</span></p>
                  <p className="text-sm text-gray-600">
                    Maintain regulatory compliance while enhancing security for specific transaction types.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium text-gray-800 mb-2">Government ID</h3>
                  <p className="text-sm mb-3">Best approach: <span className="font-medium text-green-600">Blockchain with central backup</span></p>
                  <p className="text-sm text-gray-600">
                    Leverage transparency and immutability while maintaining sovereign control of identity infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
    {/* Detail panel that slides in from the right */}
  {showDetailPanel && (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10">
      <div className="fixed right-0 top-0 bottom-0 bg-white w-full md:w-1/2 lg:w-1/3 shadow-lg z-20 overflow-y-auto animate-slide-in-right">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">{detailContent.name}</h2>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setShowDetailPanel(false)}
              aria-label="Close panel"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Detail content with close instruction */}
          <div className="space-y-4">
            <p>{detailContent.description}</p>
            
            <div className="bg-blue-50 p-3 rounded-lg flex items-center border border-blue-100 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-blue-700">
                Close this window to view detailed metrics and analysis below.
              </p>
              <button 
                onClick={() => setShowDetailPanel(false)}
                className="ml-auto bg-blue-500 text-white p-1 rounded-full hover:bg-blue-600 flex-shrink-0"
                aria-label="Close panel"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
    
    {/* footer */}
    <Footer />

    </div>
  );
}
export default ModernIdentitySystemsApp;