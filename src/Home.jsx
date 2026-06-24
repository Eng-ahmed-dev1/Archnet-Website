import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-badge">
          .NET 10 · Clean Architecture · Microservices · Vertical Slice
        </div>
        
        <h1 className="hero-title">
          Build production .NET<br />APIs without the boilerplate
        </h1>
        
        <p className="hero-subtitle">
          Define your architecture visually or via CLI. Archneter generates a complete, compilable .NET 10 solution following enterprise best practices — ready to run in seconds.
        </p>
        
        <div className="hero-actions">
          <a href="https://www.nuget.org/packages/Archneter" target="_blank" rel="noreferrer" className="btn btn-primary">
            Start building free
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <Link to="/how-it-works" className="btn btn-secondary">
            See how it works
          </Link>
        </div>

        {/* CODE WINDOW */}
        <div className="code-window">
          <div className="code-header">
            <div className="mac-dots">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
            </div>
            <div className="code-title">Terminal — archneter new CleanApp --arch clean</div>
          </div>
          <div className="code-content">
            <pre>
<span className="token-comment">// Scaffold a complete Clean Architecture solution</span><br />
<br />
<span className="token-operator">$</span> <span className="token-function">archneter</span> new CleanApp <span className="token-operator">--arch</span> clean <span className="token-operator">--tests</span> true<br />
<br />
<span className="token-string">✔</span> Validating project name...<br />
<span className="token-string">✔</span> Generating Domain layer...<br />
<span className="token-string">✔</span> Generating Application layer...<br />
<span className="token-string">✔</span> Generating Infrastructure layer...<br />
<span className="token-string">✔</span> Generating API layer...<br />
<span className="token-string">✔</span> Configuring dependency injection...<br />
<span className="token-string">✔</span> Scaffolding unit tests...<br />
<br />
<span className="token-class">Done!</span> Your solution is ready in <span className="token-property">./CleanApp</span><br />
            </pre>
          </div>
        </div>
      </section>

      <h2 className="section-title">Supported Architectures</h2>
      
      {/* ARCHITECTURES EXPLANATION */}
      <section className="arch-grid">
        <div className="arch-card">
          <div className="arch-info">
            <h3>Clean Architecture</h3>
            <p>A classic 4-layer architecture ensuring separation of concerns. Dependencies point inward towards the Domain.</p>
            <span className="arch-command">archneter new App --arch clean</span>
          </div>
          <div className="code-window" style={{margin: 0, boxShadow: 'none'}}>
             <div className="code-header" style={{padding: '12px', background: 'transparent'}}><div className="code-title">Folder Structure</div></div>
             <div className="code-content" style={{padding: '16px'}}>
               <pre style={{color: '#94A3B8'}}>
App/<br/>
├── App.Domain/        <span className="token-comment"># Entities & Interfaces</span><br/>
├── App.Application/   <span className="token-comment"># CQRS Handlers</span><br/>
├── App.Infrastructure/<span className="token-comment"># EF Core & APIs</span><br/>
└── App.Api/           <span className="token-comment"># Controllers</span>
               </pre>
             </div>
          </div>
        </div>

        <div className="arch-card">
          <div className="arch-info">
            <h3>Vertical Slice Architecture</h3>
            <p>Features are grouped by capabilities rather than technical layers. Maximizes cohesion and minimizes coupling.</p>
            <span className="arch-command">archneter new App --arch verticalslice --features Orders</span>
          </div>
          <div className="code-window" style={{margin: 0, boxShadow: 'none'}}>
             <div className="code-header" style={{padding: '12px', background: 'transparent'}}><div className="code-title">Folder Structure</div></div>
             <div className="code-content" style={{padding: '16px'}}>
               <pre style={{color: '#94A3B8'}}>
App.Api/<br/>
└── Features/<br/>
    └── Orders/<br/>
        ├── Commands/<br/>
        ├── Queries/<br/>
        ├── DTOs/<br/>
        └── Endpoints/
               </pre>
             </div>
          </div>
        </div>

        <div className="arch-card">
          <div className="arch-info">
            <h3>Microservices</h3>
            <p>Scaffolds an API Gateway, Shared Contracts, and multiple microservices with their own internal architectures.</p>
            <span className="arch-command">archneter new App --arch microservices --services Order,Auth</span>
          </div>
          <div className="code-window" style={{margin: 0, boxShadow: 'none'}}>
             <div className="code-header" style={{padding: '12px', background: 'transparent'}}><div className="code-title">Folder Structure</div></div>
             <div className="code-content" style={{padding: '16px'}}>
               <pre style={{color: '#94A3B8'}}>
App/<br/>
├── ApiGateway/<br/>
├── Shared.Contracts/<br/>
├── Services/<br/>
│   ├── Order.Service/<br/>
│   └── Auth.Service/<br/>
└── docker-compose.yml
               </pre>
             </div>
          </div>
        </div>

        <div className="arch-card">
          <div className="arch-info">
            <h3>Modular Monolith</h3>
            <p>A monolithic application separated into distinct modules. Great balance between maintainability and deployment simplicity.</p>
            <span className="arch-command">archneter new App --arch modularmonolith --modules Sales</span>
          </div>
          <div className="code-window" style={{margin: 0, boxShadow: 'none'}}>
             <div className="code-header" style={{padding: '12px', background: 'transparent'}}><div className="code-title">Folder Structure</div></div>
             <div className="code-content" style={{padding: '16px'}}>
               <pre style={{color: '#94A3B8'}}>
App/<br/>
├── App.Host/<br/>
├── App.Shared/<br/>
└── Modules/<br/>
    └── App.Modules.Sales/<br/>
        ├── Core/<br/>
        └── Infrastructure/
               </pre>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
