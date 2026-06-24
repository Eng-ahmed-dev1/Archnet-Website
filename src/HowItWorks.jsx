import React from 'react';

function HowItWorks() {
  return (
    <div className="docs-container">
      <main className="docs-content">
        <h1>How Archneter Works</h1>
        <p>
          Archneter is an enterprise-grade, extensible command-line interface (CLI) engineered to accelerate .NET application development. Built upon Microsoft's best practices and <code>Microsoft.Extensions.DependencyInjection</code>, Archneter eliminates manual boilerplate setup by automating the scaffolding of highly cohesive, scalable software architectures.
        </p>
        
        <h2>Project Structure</h2>
        <p>The Archneter CLI itself is structured into three primary projects to maintain clean separation of concerns:</p>
        
        <div className="code-block">
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
          <li><strong>.Api:</strong> Contains <code>Controllers</code>, <code>Middlewares</code>, <code>Extensions</code>, and `Program.cs` for dependency injection registration.</li>
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
        <p>
          Writing tests shouldn't be an afterthought. By appending the <code>--tests true</code> flag to your command, Archneter will automatically scaffold accompanying <strong>xUnit</strong> or <strong>NUnit</strong> test projects for your architecture. 
        </p>
        <p>
          It creates dedicated <code>.UnitTests</code> and <code>.IntegrationTests</code> projects and automatically wires up the correct internal project references (e.g., referencing the <code>.Domain</code> and <code>.Application</code> layers), saving you the hassle of manual `dotnet add reference` commands.
        </p>

        <h3>Dry-Run Mode <code>--dry-run</code></h3>
        <p>
          Not sure what the CLI is going to generate? Use the <code>--dry-run</code> flag. 
        </p>
        <p>
          The <code>DryRunCliService</code> simulates the entire execution process. Instead of modifying your disk, it prints a complete, detailed execution plan to your terminal. It shows you exactly which folders will be created, which <code>dotnet new</code> commands will be executed, and which references will be added, providing complete transparency and safety.
        </p>

        <h2>Interactive Wizard</h2>
        <p>
          If you forget to provide the required flags (like <code>--services</code> for Microservices or <code>--features</code> for Vertical Slice), Archneter doesn't just fail. It triggers a smart interactive wizard that asks you for the count and names dynamically right in the terminal!
        </p>

        <h2>Global Installation</h2>
        <p>Archneter is distributed as a .NET Global Tool. Once installed, it's available anywhere on your machine.</p>
        <div className="code-block">
          dotnet tool install -g Archneter
        </div>
        
        <div style={{marginTop: '48px', display: 'flex', gap: '16px', marginBottom: '80px'}}>
           <a href="https://www.nuget.org/packages/Archneter" target="_blank" rel="noreferrer" className="btn btn-primary">
            Install via NuGet
          </a>
          <a href="https://github.com/Eng-ahmed-dev1/Archneter-Library" target="_blank" rel="noreferrer" className="btn btn-secondary">
            View Source Code
          </a>
        </div>
      </main>
    </div>
  );
}

export default HowItWorks;
