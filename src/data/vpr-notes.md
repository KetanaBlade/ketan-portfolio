<strong>Slide 1: Title & Introduction</strong><br/><br/>
"Hi everyone, thank you so much for having me today. I am really glad to meet you all. I'm Ketan, and I’m a Product Designer who thrives on complexity. My background is in Information Science and Human-Computer Interaction, which drives me to deconstruct messy problems, but my passion for design and empathy for users ensures I rebuild them into solutions that feel simple, modern, and human.
<br/><br/>
When I saw this role at Capital One, I was incredibly interested. The challenge of designing interfaces that need to adapt to different brands and contexts is exactly the kind of design puzzle I enjoy solving. Today, I want to walk you through two projects from my work at Appian that show how I approach this. First, we will look at Case Management Studio, where we redesigned how businesses build and configure their own workflows. Then, we will look at the story of how I led the migration of our Figma component library."
---SLIDE---
<strong>Slide 2: About Me & My Approach</strong><br/><br/>
"To share a bit more about myself and how I work: I hold a Master’s in Information Science from UNC Chapel Hill, specializing in HCI, and a Bachelor’s in Philosophy from Virginia Tech. Outside of design, you can usually find me hiking, traveling, reading, or diving down Wikipedia rabbit holes. I have always been a naturally curious person, and I love learning about the world and different perspectives.
<br/><br/>
Professionally, my design approach is built on three simple ideas:
<br/>
First, my work is <strong>Evidence-Based</strong>. I believe the best design decisions are justified. Whether it is through usability testing or heuristic evaluations, I rely on data and insights to validate where a design is going.
<br/><br/>
Second, I am a <strong>Problem Solver</strong>. I look beyond the immediate feature request to understand the whole context. By finding the root cause of a user's difficulty, I can design a solution that actually works for the long term.
<br/><br/>
And third, I believe in <strong>Purposeful Craft</strong>. I think that robust architecture and accessibility are essential to a great experience, working alongside intentional visual design to make a product feel complete."
---SLIDE---
<strong>Slide 3: Agenda</strong><br/><br/>
"For our agenda today, we will spend 25 minutes on Case Management Studio. I will show you how we designed a visual system that gives business users no-code control over their applications, and how we built an extensible foundation underneath for low-code developers. We will have a quick Q&A right after.
<br/><br/>
Then, we will spend 25 minutes on the Figma component library migration, looking at how we aligned design variants with developer parameters, and how we set up governance to keep the library accurate. We will save our final questions for the last 10 minutes."
---SLIDE---
<strong>Slide 4: Core Concepts: Cases, Workflows, & Tasks</strong><br/><br/>
"Let's start with Case Management Studio. Since you might not be familiar with this specific product or Appian, I want to start by explaining the simple, core concepts behind it.
<br/><br/>
When we talk about a 'case,' we just mean a generic term for any process an organization or an individual might undertake. For example, for a local government, a case might be a 'Permit Request.' For a university, a case could be a 'Major' that a student is pursuing.
<br/><br/>
A 'workflow' is simply the set of tasks and dependencies needed to complete that case. In the government permit example, the workflow might involve tasks like uploading documents, running a legal review, and scheduling an inspection. In the university example, the workflow is actually the dependency tree of courses a student needs to take to complete that major.
<br/><br/>
In my work, I set out to design a system that is flexible enough to handle any of these variations out-of-the-box, without requiring custom development for each new scenario."
---SLIDE---
<strong>Slide 5: The Challenge: Customizing Monolithic Solutions</strong><br/><br/>
"To understand why we built Case Management Studio, it helps to understand how Appian historically delivered pre-built applications. We used to build large, industry-specific applications that were supposed to get clients 80% of the way there.
<br/><br/>
But there was a major problem: these solutions had massive, tightly coupled monolithic codebases. Even if a customer only wanted a tiny piece of the app—like just the document upload section—they had to import the entire, sprawling database of objects into their system. It was a nightmare to customize and maintain because modifying one object would break future product updates.
<br/><br/>
We set out to design a completely new platform framework called Case Management Studio. We wanted to empower business admins to visually create their own case types, workflows, and branding with no-code control.
<br/><br/>
Under the hood, we designed a highly decoupled, modular architecture of Appian objects—like record types, interfaces, constants, and maps. This lets developers pick and choose only the pieces they want, and gives them a clean foundation to build custom logic on top without inheriting any monolithic debt."
---SLIDE---
<strong>Slide 6: Usability Research: Connected Onboarding Study</strong><br/><br/>
"Our transition to a visual workflow builder did not happen overnight. It was driven by deep user research.
<br/><br/>
In my previous project, Connected Onboarding, I inherited a legacy task configuration grid that was highly error-prone. The grid relied on a 'Precedents' model, which required users to define what tasks came <em>before</em> the current task. Essentially, it forced users to think backward.
<br/><br/>
I ran a usability study one sprint before implementation to evaluate this setup. The results were a stark wake-up call: <strong>100% of participants</strong> failed to configure conditional branching correctly on their first attempt, identifying the backward mental model as their main struggle.
<br/><br/>
While we mitigated this in the short term by flipping the interaction to a 'Dependent' model—asking what happens <em>after</em>—we uncovered a critical long-term insight: <strong>nearly half of the participants explicitly requested a visual workflow representation.</strong> They wanted to see their logic as a flowchart. This empirical user research became our primary business case and blueprint to build a dedicated visual builder in Case Management Studio."
---SLIDE---
<strong>Slide 7: Studio Solution 1: The Hybrid Workflow Builder</strong><br/><br/>
"With our research confirming that users needed a visual tool, we began designing the workflow builder for Case Management Studio. However, we hit an immediate gap between what users expected and what our low-code platform could do.
<br/><br/>
In early testing, users intuitively tried to drag and drop nodes on a canvas. But this was simply something that could not be done natively on our low-code platform at the time.
<br/><br/>
Because of these technical limits, I pivoted our design. I designed a three-pane compromise: a list-based text entry on the left for rapid typing, logic configuration in the middle, and a read-only visual flowchart on the right that updates in real-time as you type, supporting direct manipulation where possible. In our validation testing, users were highly confident. They got the speed of a data list and the immediate visual safety check of a flowchart, proving we could solve their core need within our technical constraints."
---SLIDE---
<strong>Slide 8: Studio Solution 2: Systemic Automation</strong><br/><br/>
"We faced another process conflict when designing our automation engine. Different clients needed automation at different levels—some rules needed to be global, while others were highly specific.
<br/><br/>
To define how this logic should be organized, I conducted a card-sorting study with seven participants. The goal was to see how users naturally grouped various automation triggers and actions.
<br/><br/>
The study revealed that users did not group automations by <em>what</em> the trigger was, but rather by the <em>scope</em> of the rule—whether it was global or local.
<br/><br/>
Based on this insight, I designed a hierarchical inheritance model. Instead of manual overrides, the system enforces a clear rule: specific, local rules always take priority over general, global rules. This 'lowest level wins' pattern matched the existing behavior for our user-defined data fields, ensuring that rules propagate cleanly from Global Level down to Category Level and specific Case Type levels."
---SLIDE---
<strong>Slide 9: Studio Solution 3: Integrated Data & Form Designer</strong><br/><br/>
"Next in the Studio experience, we developed the no-code Integrated Data and Form Designer. Previously in Appian solutions, adding a simple form field required developers to submit an IT ticket to manually modify the database. This was a massive operational bottleneck.
<br/><br/>
To solve this, I designed a no-code visual form builder that introduces implicit data modeling. When an administrator visually drags and drops a new field onto the canvas, the system automatically creates and configures the corresponding backend data structure in the database underneath.
<br/><br/>
To accelerate form creation, we integrated secure Private AI. Now, an administrator can simply prompt the system—such as asking it to 'create a dropdown for US states'—and the AI automatically generates the data type, sets the constraints, and populates all the dropdown choices.
<br/><br/>
Crucially, every single component output by this designer automatically meets WCAG 2.1 AA accessibility standards out of the box, ensuring that non-technical builders produce fully compliant forms by default."
---SLIDE---
<strong>Slide 10: Workspace Solution 1: Centralized Workspace Experience</strong><br/><br/>
"Now let's pivot from the Studio configuration environment to the Workspace Experience—the front-end interface where case workers actually review information and make decisions daily.
<br/><br/>
Our primary challenge here was disconnected data. Case workers were constantly bouncing between emails, documents, and external databases to find context. We designed the case record to aggregate all necessary context into a unified command center.
<br/><br/>
When we tested foundational design decisions like navigation, we ran into an interesting layout conflict. While the Studio environment utilizes a vertical sidebar to support its deep hierarchy, case workers in the Workspace struggled with it. They are constantly reviewing dense, side-by-side tables and documents, and a sidebar ate up too much critical horizontal real estate.
<br/><br/>
Based on usability testing, we pivoted the Workspace navigation to a clean top-navigation model. This simple change preserved maximum horizontal screen space, allowing workers to review documents side-by-side comfortably while the workspace dynamically renders case-specific forms configured in Studio."
---SLIDE---
<strong>Slide 11: Workspace Solution 2: AI-Powered Assistance</strong><br/><br/>
"To further accelerate decision-making inside the Workspace, we integrated secure Private AI assistance directly into the case worker's day-to-day context.
<br/><br/>
I designed three primary AI capabilities: Contextual Chat, Thread Summarization, and Document Summarization. In the side panel, workers can chat securely with the case history, and the system automatically surfaces similar past cases and suggests potential resolutions based on historical data.
<br/><br/>
When reviewing long comment threads or complex attached PDFs, workers can instantly generate concise, citation-backed summaries.
<br/><br/>
I worked closely on prompt engineering for these models to ensure the AI output was structured specifically for rapid, audit-compliant decision-making, allowing workers to process massive document folders in seconds without manual review."
---SLIDE---
<strong>Slide 12: Workspace Solution 3: Public Access & Self-Service</strong><br/><br/>
"But case management doesn't stop inside the organization. We also had to design for external users—the citizens and customers applying for services.
<br/><br/>
We created a seamless, secure external experience divided into two parts: Public Portals and Authenticated Self-Service. For anonymous citizens, we designed a mobile-first portal to discover services and complete guided, bite-sized intake flows without a login.
<br/><br/>
Once registered, the authenticated 'My Cases' dashboard lets users track their application timeline, upload missing documents, and communicate securely with case workers.
<br/><br/>
Since external users overwhelmingly access these portals via mobile devices, I completely pivoted the design language for this space—moving away from dense enterprise grids to clear typography, guided step-by-step progress bars, and generous touch target spacing. This offloaded a massive volume of manual status check emails for our clients."
---SLIDE---
<strong>Slide 13: Extensibility & Solutions Hub Branding</strong><br/><br/>
"To complete the platform strategy of Case Management Studio, we made the architecture fully agnostic and extensible. Customers can easily plug in custom task types, email templates, and specialized logical rules like a Fraud Check.
<br/><br/>
To handle brand scaling, I designed the <strong>Solutions Hub theming engine</strong>. Instead of hardcoded styles or complex CSS overwrites, an administrator can define corporate colors, typography, and logos in a single Solutions Hub portal.
<br/><br/>
Once configured, this theme instantly propagates across the entire platform, rebranding the Studio config builder, the worker Workspace, and external public portals natively.
<br/><br/>
We also built contrast calculators directly into this engine. If an admin selects an inaccessible corporate color, the theme generator automatically shifts the typography weight or adjusts values to guarantee WCAG AA accessibility by default.
<br/><br/>
In the end, this scalable platform architecture allowed clients to go live in as little as 4 weeks—a 50% implementation reduction—and is currently adopted in production by 92 major enterprises, including Porsche, Pfizer, and Vanguard."
---SLIDE---
<strong>Slide 14: Project 1 Q&A</strong><br/><br/>
"That concludes our deep dive into Case Management Studio. I want to pause here and open up the floor to the panel. I would love to answer any questions you have regarding our Visual Workflow Builder, the precedents-to-dependents research, B2B proxy research, the top-navigation layout pivot in Workspace, or the Solutions Hub branding engine."
---SLIDE---
<strong>Slide 15: Evaluating our Design Tools: Sketch vs Figma</strong><br/><br/>
"Now let's transition to the second project, which focuses on our internal design infrastructure: the Appian Figma Component Library.
<br/><br/>
When I joined the team, we were using Sketch, which was creating daily friction. Its complex, nested symbol architecture was fragile. More importantly, we had Customer Success managers and external partners asking to view our prototypes, but Sketch being Mac-only created a major roadblock.
<br/><br/>
I saw an opportunity to modernize. We ran an internal UX survey and found a 9-to-4 preference for Figma. Designers loved its cleaner interface, found it significantly easier to set up clickable prototypes, and the fact that it runs in the browser meant we could seamlessly share prototypes and collaborate across teams and operating systems."
---SLIDE---
<strong>Slide 16: The Figma Hackathon: Proving the Concept</strong><br/><br/>
"To prove Figma was the right choice, I helped organize a team-wide hackathon. We set up a shared backlog and divided the component-building work among the team to see how fast we could move.
<br/><br/>
We didn't just copy the old files; we used our actual SAIL design system documentation as our absolute source of truth. The hackathon proved that Figma's Variants were a game-changer. Instead of diving through fragile, deeply nested Sketch symbols, designers could just drag an asset in and easily toggle properties. This drastically reduced the sheer number of components we needed to maintain. 
<br/><br/>
These evidence-based findings—both the survey results and the hackathon performance—formed the core of a formal proposal that won leadership buy-in and secured Figma enterprise licenses."
---SLIDE---
<strong>Slide 17: Figma Component & SAIL Parameter Parity</strong><br/><br/>
"During the build phase, I worked closely with our front-end developers to align our design system with their implementation methods.
<br/><br/>
Because Appian developers code using SAIL components, we mapped our Figma variants directly to the parameters in the SAIL codebase. For a designer, this means unparalleled ease of use: you just bring a library asset onto the canvas, and toggle its properties in the right sidebar exactly how a developer configures it in code. We also used Auto Layout constraints so components resized fluidly. This 1:1 parity eliminated guesswork for our developers."
---SLIDE---
<strong>Slide 18: Design Library Maintenance & Standards</strong><br/><br/>
"A component library is only useful if it stays clean. Without strict standards, design libraries quickly get cluttered and drift away from the codebase.
<br/><br/>
To prevent this, the working group that formed during the hackathon established a formal DesignOps pipeline. We created a structured backlog to track component requests just like software bugs, and we introduced a strict branching workflow in Figma. When a designer updates a component, they work in an isolated branch. That branch is peer-reviewed by the working group for naming, properties, and Auto Layout parity before being merged. This ensures our library stays reliable."
---SLIDE---
<strong>Slide 19: Figma Community Release & AI-Assisted Workflows</strong><br/><br/>
"Once our internal team was aligned, we realized our external partners who build custom Appian integrations would benefit from this library too.
<br/><br/>
I led the effort to publish our library to the public Figma Community. To date, it has been adopted by nearly 1,000 external designers and clients.
<br/><br/>
Most recently, I have integrated the Figma Model Context Protocol, or MCP, into our design pipeline. This protocol connects our Figma design library data directly to AI tools. By loading our exact component structures and constraints into AI contexts, we drastically speed up new component creation and library updates."
---SLIDE---
<strong>Slide 20: Q&A & Discussion</strong><br/><br/>
"That wraps up our Figma SAIL library migration case study and design operations overview. I want to thank you all so much for your time today, and I would love to open the floor for any final questions you might have on design systems governance, Figma MCP, design operations, B2B platform scale, or general portfolio topics. Thank you."
