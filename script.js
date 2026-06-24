const homeView = `
  <section class="hero">
    <div class="hero-badge">.NET 10 · Clean Architecture · Microservices · Vertical Slice</div>
    <h1 class="hero-title">Build production .NET<br />APIs without the boilerplate</h1>
    <p class="hero-subtitle">Define your architecture visually or via CLI. Archneter generates a complete, compilable .NET 10 solution following enterprise best practices — ready to run in seconds.</p>
    <div class="hero-actions">
      <a href="https://www.nuget.org/packages/Archneter" target="_blank" rel="noreferrer" class="btn btn-primary">
        Start building free
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <a href="#" id="btn-how-it-works" class="btn btn-secondary">See how it works</a>
    </div>
    <div class="code-window">
      <div class="code-header">
        <div class="mac-dots"><div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div></div>
        <div class="code-title">Terminal — archneter new CleanApp --arch clean</div>
      </div>
      <div class="code-content">
        <pre><span class="token-comment">// Scaffold a complete Clean Architecture solution</span>

<span class="token-operator">$</span> <span class="token-function">archneter</span> new CleanApp <span class="token-operator">--arch</span> clean <span class="token-operator">--tests</span> true

<span class="token-string">✔</span> Validating project name...
<span class="token-string">✔</span> Generating Domain layer...
<span class="token-string">✔</span> Generating Application layer...
<span class="token-string">✔</span> Generating Infrastructure layer...
<span class="token-string">✔</span> Generating API layer...
<span class="token-string">✔</span> Configuring dependency injection...
<span class="token-string">✔</span> Scaffolding unit tests...

<span class="token-class">Done!</span> Your solution is ready in <span class="token-property">./CleanApp</span></pre>
      </div>
    </div>
  </section>

  <h2 class="section-title">Supported Architectures</h2>
  <section class="arch-grid">
    <div class="arch-card">
      <div class="arch-info">
        <h3>Clean Architecture</h3>
        <p>A classic 4-layer architecture ensuring separation of concerns. Dependencies point inward towards the Domain.</p>
        <span class="arch-command">archneter new App --arch clean</span>
      </div>
      <div class="code-window" style="margin: 0; box-shadow: none;">
         <div class="code-header" style="padding: 12px; background: transparent;"><div class="code-title">Folder Structure</div></div>
         <div class="code-content" style="padding: 16px;">
           <pre style="color: #94A3B8;">
App/
├── App.Domain/        <span class="token-comment"># Entities & Interfaces</span>
├── App.Application/   <span class="token-comment"># CQRS Handlers</span>
├── App.Infrastructure/<span class="token-comment"># EF Core & APIs</span>
└── App.Api/           <span class="token-comment"># Controllers</span></pre>
         </div>
      </div>
    </div>

    <div class="arch-card">
      <div class="arch-info">
        <h3>Vertical Slice Architecture</h3>
        <p>Features are grouped by capabilities rather than technical layers. Maximizes cohesion and minimizes coupling.</p>
        <span class="arch-command">archneter new App --arch verticalslice --features Orders</span>
      </div>
      <div class="code-window" style="margin: 0; box-shadow: none;">
         <div class="code-header" style="padding: 12px; background: transparent;"><div class="code-title">Folder Structure</div></div>
         <div class="code-content" style="padding: 16px;">
           <pre style="color: #94A3B8;">
App.Api/
└── Features/
    └── Orders/
        ├── Commands/
        ├── Queries/
        ├── DTOs/
        └── Endpoints/</pre>
         </div>
      </div>
    </div>

    <div class="arch-card">
      <div class="arch-info">
        <h3>Microservices</h3>
        <p>Scaffolds an API Gateway, Shared Contracts, and multiple microservices with their own internal architectures.</p>
        <span class="arch-command">archneter new App --arch microservices --services Order,Auth</span>
      </div>
      <div class="code-window" style="margin: 0; box-shadow: none;">
         <div class="code-header" style="padding: 12px; background: transparent;"><div class="code-title">Folder Structure</div></div>
         <div class="code-content" style="padding: 16px;">
           <pre style="color: #94A3B8;">
App/
├── ApiGateway/
├── Shared.Contracts/
├── Services/
│   ├── Order.Service/
│   └── Auth.Service/
└── docker-compose.yml</pre>
         </div>
      </div>
    </div>

    <div class="arch-card">
      <div class="arch-info">
        <h3>Modular Monolith</h3>
        <p>A monolithic application separated into distinct modules. Great balance between maintainability and deployment simplicity.</p>
        <span class="arch-command">archneter new App --arch modularmonolith --modules Sales</span>
      </div>
      <div class="code-window" style="margin: 0; box-shadow: none;">
         <div class="code-header" style="padding: 12px; background: transparent;"><div class="code-title">Folder Structure</div></div>
         <div class="code-content" style="padding: 16px;">
           <pre style="color: #94A3B8;">
App/
├── App.Host/
├── App.Shared/
└── Modules/
    └── App.Modules.Sales/
        ├── Core/
        └── Infrastructure/</pre>
         </div>
      </div>
    </div>
  </section>
`;

const howItWorksView = `
  <div class="docs-container" style="padding: 0; padding-top: 40px;">
    <div class="docs-content">
      <h1>How Archneter Works</h1>
      <p>Archneter is an enterprise-grade, extensible command-line interface (CLI) engineered to accelerate .NET application development. Built upon Microsoft's best practices and <code>Microsoft.Extensions.DependencyInjection</code>, Archneter eliminates manual boilerplate setup by automating the scaffolding of highly cohesive, scalable software architectures.</p>
      
      <h2>Project Structure</h2>
      <p>The Archneter CLI itself is structured into three primary projects to maintain clean separation of concerns:</p>
      <div class="code-block">
        Archneter/<br/>
        ├── Archneter.Core/          # Domain abstractions, models, and shared enums<br/>
        ├── Archneter.Generators/    # Architecture-specific code generation logic<br/>
        └── Archneter.Cli/           # Command-Line Interface and argument dispatching
      </div>

      <h2>Deep Dive: Scaffolding Capabilities</h2>
      <p>Archneter generates highly opinionated folder structures within each architecture to ensure best practices from day one.</p>

      <h3>Clean Architecture</h3>
      <ul>
        <li><strong>.Domain:</strong> Contains <code>Entities</code>, <code>Enums</code>, <code>Exceptions</code>, and <code>ValueObjects</code>. This is the core, containing zero external dependencies.</li>
        <li><strong>.Application:</strong> Contains <code>Commands</code>, <code>Queries</code>, <code>DTOs</code>, <code>Interfaces</code>, and <code>Validators</code>. MediatR is typically configured here.</li>
        <li><strong>.Infrastructure:</strong> Contains <code>Data/DbContexts</code>, <code>Repositories</code>, <code>Migrations</code>, and <code>Services</code> (e.g., Email, Stripe integration).</li>
        <li><strong>.Api:</strong> Contains <code>Controllers</code>, <code>Middlewares</code>, <code>Extensions</code>, and \`Program.cs\` for dependency injection registration.</li>
      </ul>

      <h3>Vertical Slice Architecture</h3>
      <ul>
        <li><strong>Features:</strong> The core concept. Grouped by domain boundaries (e.g., <code>Orders/</code>, <code>Users/</code>).</li>
        <li><strong>Inside a Feature:</strong> You will find <code>Commands</code>, <code>Queries</code>, <code>Endpoints</code>, and <code>DTOs</code> located right next to each other to maximize cohesion.</li>
      </ul>

      <h3>Modular Monolith</h3>
      <ul>
        <li><strong>.Host:</strong> The main Web API project that loads and registers all modules.</li>
        <li><strong>.Shared:</strong> Contains interfaces and cross-cutting concerns (e.g., logging, authorization) shared across modules.</li>
        <li><strong>Modules:</strong> Each module (e.g., <code>Sales</code>, <code>Catalog</code>) contains its own internal <code>Core/</code> and <code>Infrastructure/</code> folders, acting as mini-applications.</li>
      </ul>

      <h3>Microservices</h3>
      <ul>
        <li><strong>ApiGateway:</strong> Configured for routing requests (e.g., using YARP or Ocelot).</li>
        <li><strong>Shared.Contracts:</strong> Message classes, DTOs, and event definitions shared between services for RabbitMQ or Azure Service Bus.</li>
        <li><strong>Services:</strong> Each individual microservice gets its own dedicated folder containing its own internal Clean Architecture or Vertical Slice setup.</li>
      </ul>

      <h2>Essential Features</h2>

      <h3>Test Project Scaffolding <code>--tests true</code></h3>
      <p>Writing tests shouldn't be an afterthought. By appending the <code>--tests true</code> flag to your command, Archneter will automatically scaffold accompanying <strong>xUnit</strong> or <strong>NUnit</strong> test projects for your architecture. It creates dedicated <code>.UnitTests</code> and <code>.IntegrationTests</code> projects and automatically wires up the correct internal project references.</p>

      <h3>Dry-Run Mode <code>--dry-run</code></h3>
      <p>Not sure what the CLI is going to generate? Use the <code>--dry-run</code> flag. The <code>DryRunCliService</code> simulates the entire execution process. Instead of modifying your disk, it prints a complete, detailed execution plan to your terminal.</p>

      <h2>Interactive Wizard</h2>
      <p>If you forget to provide the required flags (like <code>--services</code> for Microservices or <code>--features</code> for Vertical Slice), Archneter doesn't just fail. It triggers a smart interactive wizard that asks you for the count and names dynamically right in the terminal!</p>

      <h2>Global Installation</h2>
      <p>Archneter is distributed as a .NET Global Tool. Once installed, it's available anywhere on your machine.</p>
      <div class="code-block">dotnet tool install -g Archneter</div>
      
      <div style="margin-top: 48px; display: flex; gap: 16px; margin-bottom: 80px;">
         <a href="https://www.nuget.org/packages/Archneter" target="_blank" rel="noreferrer" class="btn btn-primary">Install via NuGet</a>
        <a href="https://github.com/Eng-ahmed-dev1/Archneter-Library" target="_blank" rel="noreferrer" class="btn btn-secondary">View Source Code</a>
      </div>
    </div>
  </div>
`;

const appContent = document.getElementById('app-content');

function navigateToHome(e) {
  if (e) e.preventDefault();
  appContent.innerHTML = homeView;
  window.scrollTo(0, 0);
  
  const btnHowItWorks = document.getElementById('btn-how-it-works');
  if (btnHowItWorks) {
    btnHowItWorks.addEventListener('click', navigateToHowItWorks);
  }
}

function navigateToHowItWorks(e) {
  if (e) e.preventDefault();
  appContent.innerHTML = howItWorksView;
  window.scrollTo(0, 0);
}

document.getElementById('nav-home').addEventListener('click', navigateToHome);
document.getElementById('nav-how-it-works').addEventListener('click', navigateToHowItWorks);

// Load initial view
navigateToHome();
