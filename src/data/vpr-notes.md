<strong>Slide 1: Title &amp; Introduction</strong><br><br>
"Hello! Thank you so much for having me today. I am really glad to meet you. I'm Ketan.<div><br>
When I saw this role at Capital One, I was incredibly interested. The challenge of designing interfaces that need to adapt to different brands and contexts is exactly the kind of design puzzle I enjoy solving. Today, I want to walk you through two projects from my work at Appian that show how I approach this. First, we will look at Case Management Studio, where we redesigned how businesses build and configure their own workflows. Then, we will look at the story of how I led the migration of our Figma component library."</div>
---SLIDE---
<strong>Slide 2: About Me &amp; My Approach</strong><br><br>
"UX ended up being a great combination of all of the things that I like doing. I have always been a naturally curious person, so I took the opportunity in college at Virginia Tech to take as many courses as I could every semester and study abroad as much as possible in my winters and summers. I always knew I wanted to go to grad school, and I knew that the critical thinking and problem solving skills I learned through Philosophy and the tons of other things I learned about would assist me wherever I went. I ended up going to UNC for grad school for Information Science, which while vaguely techy really depends on what you decide to specialize in. Very early on I identified human-computer interaction as what I was interested in, and working at the intersection of humans and technology and breaking down those interactions was very appealing to me. I've always ended up in tech spaces, and this was a great way to combine that with the skills I had built up.<br><br>
Professionally, my design approach is built on three simple ideas:
<br>
First, my work is <strong>Evidence-Based</strong>. Coming from a more academic background, I strongly feel that data is important, and that the best design decisions are justified. Whether it is through usability testing or heuristic evaluations, I rely on data and insights to validate where a design is going.
<br><br>
Second, I am a <strong>Problem Solver</strong>. And I try to look beyond the immediate feature request to understand the whole context. Understanding the foundation of user pain points, needs, and wants makes it so that design a solution that actually works for the long term and think about increments as I go.<br><br>&nbsp;think that robust architecture and accessibility are essential to a great experience, and I try my best to advocate for following accessibility standards as much as possible."
---SLIDE---
<strong>Slide 3: Agenda</strong><br><br>
"For our agenda today, I'll start with Case Management Studio. I will show you how we designed a visual system that gives business users no-code control over their applications, and how we built an extensible foundation underneath for low-code developers so that it can be used for any number of use cases. Then we'll have a quick Q&amp;A right after.
<br><br>
Then, I'll talk about Design Operations and Scaling Design. I'll walk through how we migrated our component library to Figma, how we democratized knowledge through the UX Chapter, and how we innovated our usability testing processes. Then we'll have some more time for Q&amp;A.
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
<strong>Slide 5: The Challenge: Customizing Monolithic Solutions</strong><br><br>
"To understand why we built Case Management Studio, it helps to understand how Appian historically has delivered pre-built applications. In our Solutions group, we build large, industry-specific applications that are supposed to get customers 80% of the way there.
<br><br>
But there were a couple of major problems: these solutions had massive, monolithic codebases. Even if a customer only wanted a tiny piece of the app—like just the document upload section—they had to import the entire, sprawling database of objects into their system. It was a nightmare to customize and even internally to continue to develop these applications. As well as this, modifying one object would break future product updates.
<br><br>
With Case Management Studio (CMS), we wanted to build a better foundation for this sort of app, and not only make it better from a structural perspective but empower business admins who know nothing about code to visually create their own case types, workflows, and branding with no-code control.
<br><br>Primarily, this manifested as a modular design strategy. From the developer and customer side, this let them pick and choose only the pieces they want, and gives them a clean foundation to build custom logic on top without inheriting any monolithic debt. And from the design side, it meant that they would have a great looking application that was easily extendable no matter what their use case was or what pieces they chose to take or leave."
---SLIDE---
<strong>Slide 6: Usability Research: Connected Onboarding Study</strong><br><br>
"Our transition to a visual workflow builder did not happen overnight. It was driven by deep user research.
<br><br>While many of the foundational problems we were aware of, one of the core parts of CMS came from discoveries I made during my previous project, Connected Onboarding. I inherited a legacy task configuration grid meant for onboarding workflows that was highly error-prone. The grid relied on a 'Precedents' model, which required users to define what tasks came <em>before</em> the current task. Essentially, it forced users to think backward.
<br><br>
I ran a usability study with customers right after joining that project, just a sprint before implementation to evaluate this setup. The results were not great:&nbsp;<strong>100% of participants</strong> failed to configure conditional branching correctly on their first attempt, identifying the backward mental model as their main struggle.
<br><br>
While we mitigated this in the short term by flipping the interaction to a 'Dependent' model, consolidating error messages, and moving to cell-level validation, the set in motion the beginning of what would be Case Management Studio nearly a year later. A key finding was that&nbsp;<strong>nearly half of the participants explicitly requested a visual workflow representation.</strong> They wanted to see their logic as a flowchart. This empirical user research became our primary business case and blueprint to build a dedicated visual workflow builder in Case Management Studio."
---SLIDE---
<strong>Slide 7: Studio Solution 1: The Hybrid Workflow Builder</strong><br><br>
"With the research confirming that users needed a visual tool, I began designing the workflow builder for Case Management Studio. There was an immediate gap between what users expected and what our low-code platform could do.
<br><br>
In early testing with Figma prototypes, users intuitively tried to drag and drop nodes on a canvas. But this was simply something that could not be done natively on our low-code platform at the time.
<br><br>
Because of these technical limits, I pivoted our design. I designed a three-pane compromise: a list of tasks on the left for navigation, with arrow keys for reordering (and later grid drag and drop), logic configuration in the middle, and a read-only visual flowchart on the right that updates in real-time as you type, supporting direct manipulation where possible. In our validation testing, users were highly confident. They got the speed of a data list and the immediate visual safety check of a flowchart, proving we could solve their core need within our technical constraints.<br><br>By having arrow key ordering for tasks and automations, we also ensured this was fully accessible for keyboard users."
---SLIDE---
<strong>Slide 8: Studio Solution 2: Systemic Automation</strong><br><br>
"After solving the core task use case, we wanted to develop automations, both workflow-based and workflow-agnostic. Different clients needed automation at different levels—some rules needed to be global, while others were highly specific. There was large stakeholder disagreement on how this should be done.<br><br>
To define how this logic should be organized, I conducted a card-sorting study with seven participants. The goal was to see how users naturally grouped various automation triggers and actions.
<br><br>
The study revealed that users did not group automations by <em>what</em> the trigger was, but rather by the <em>scope</em> of the rule—whether it was global or local or workflow.
<br><br>
Based on this insight, I designed a hierarchical inheritance model. Instead of manual overrides, the system enforces a clear rule: specific, local rules always take priority over general, global rules. This 'lowest level wins' pattern matched the existing behavior for our user-defined data fields, ensuring that rules propagate cleanly from Global Level down to Category Level and specific Case Type levels."
---SLIDE---
<strong>Slide 9: Studio Solution 3: Integrated Data &amp; Form Designer</strong><br><br>
"Next in the Studio experience, we developed the no-code Integrated Data and Form Designer. Previously in Appian solutions, adding a simple form field required developers to go in and work with the database and then modify the code for the interface to add the form field, which was both a technical and interface design challenge not always met with Appian's consultants or the in house development teams that customers used.<br><br>
To continue with the promise of CMS and its no-code configurations that were guaranteed to perform and look well regardless of use case, we worked together to create a no-code visual form builder that introduces implicit data modeling. When an administrator visually drags and drops a new field onto the canvas, the system automatically creates and configures the corresponding backend data structure in the database underneath. They could also create data types themselves in advance if they felt confident.<br><br>
To accelerate form creation, we integrated secure Private AI. Now, an administrator can simply prompt the system—such as asking it to 'create a dropdown for US states'—and the AI automatically generates the data type, sets the constraints, and populates all the dropdown choices."
---SLIDE---
<strong>Slide 10: Workspace Solution 1: Centralized Workspace Experience</strong><br><br>
"Now let's pivot from the Studio configuration environment to the Workspace Experience—the front-end interface where case workers actually interact with the case and workflow templates created by business admins and review information and make decisions daily.
<br><br>
Our primary challenge here was disconnected data. Case workers were constantly bouncing between emails, documents, and external databases to find context. We designed the case record to aggregate all necessary context into a unified command center.
<br><br>We made sure to inform even decisions like navigation layout with data. There was initial stakeholder interest in sidebar navigation, making it feels more SaaS. While the Studio environment utilizes a vertical sidebar to support its deep hierarchy, case workers in Workspace did not see as much benefit in A/B testing. They are constantly reviewing dense, side-by-side tables and documents, and a sidebar ate up too much critical horizontal real estate."
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
<strong>Slide 12: Workspace Solution 3: Public Access &amp; Self-Service</strong><br><br>
"But case management doesn't stop inside the organization. We also had to design for external users—the anonymous users and authenticated external users.<br><br>
We created a seamless, secure external experience divided into two parts: a public portal to submit "cases" and a sign-up experience to transition into Authenticated Self-Service. These were both individual modules, of course, and worked fine with only or the other. For both users, we designed this to be mobile-first. The intake forms here could be configured in the same place in Studio as the intake forms for case workers.<br><br>
Once registered, the authenticated 'My Cases' dashboard lets users track their application timeline, upload missing documents, and communicate securely with case workers.<br><br>
Since external users overwhelmingly access these portals via mobile devices, I completely pivoted the design language for this space—moving away from dense enterprise grids to clear typography, guided step-by-step progress bars, and generous touch target spacing.
<br><br>
We also prioritized strict accessibility standards, ensuring that every element was touch-friendly, high-contrast, and fully navigable by screen readers. This ensured the portal was usable for all members of the public, regardless of their device or ability."
---SLIDE---
<strong>Slide 13: Extensibility &amp; Solutions Hub Branding</strong><br><br>
"To complete the platform strategy of Case Management Studio, we made the architecture fully agnostic and extensible. Customers can easily plug in custom task types, email templates, and specialized logical rules like a Fraud Check.
<br><br>
To handle brand scaling, we created Solutions Hub.&nbsp;Instead of hardcoded styles, every element used in CMS uses a branding map that maps to a section in Solutions Hub. An administrator can change colors, typography, and logos in a single place.<br><br>
Once configured, this theme instantly propagates across the entire site, and keeping branding for the Workspace, portal, and authenticated user sites separate as they are all their own modules and they may want separate branding for different users.<br><br>
In the end, this scalable platform architecture allowed clients to go live in as little as 4 weeks—a 50% implementation reduction—and is currently adopted in production by 92 major enterprises, including Porsche, Pfizer, and Vanguard."
---SLIDE---
<strong>Slide 14: Project 1 Q&A</strong><br/><br/>
"That concludes our deep dive into Case Management Studio. I want to pause here and open up the floor to the panel. I would love to answer any questions you have regarding our Visual Workflow Builder, precedents-to-dependents research, B2B proxy research, top-navigation layout pivot in Workspace, or the Solutions Hub branding engine."
---SLIDE---
<strong>Slide 15: Evaluating our Design Tools: Sketch vs Figma</strong><br><br>
"Now let's transition to the second project, which focuses on our internal design infrastructure: the Appian Figma Component Library.
<br><br>
When I joined the team, we were using Sketch, which was creating daily friction. Its complex, nested symbol architecture was frustrating to use and required a lot of work to enhance and maintain. More importantly, we had Customer Success managers and external partners asking to view our prototypes, but Sketch prototypes were not as shareable and it was Mac-only which created a major roadblock.
<br><br>Seeing the opportunity and being familiar with Figma myself, I initiated and recruited other designers to participate in our company hackathon. We undertook multiple tasks in the 3 days it ran, collecting data and creating a proof of concept. First we wanted to get an understanding of how designers felt about Sketch vs Figma. We ran an internal UX survey and found a 9-to-4 preference for Figma, and those who voted for Sketch did not indicate they were very attached to it. Designers loved Figma's cleaner interface, found it significantly easier to set up clickable prototypes, and the fact that it runs in the browser meant we could seamlessly share prototypes and collaborate across teams and operating systems."
---SLIDE---
<strong>Slide 16: The Figma Hackathon: Proving the Concept</strong><br><br>
"Seeing the opportunity and being familiar with Figma myself, I initiated and recruited other designers to participate in our company hackathon. First we wanted to get an understanding of how designers felt about Sketch vs Figma. We ran an internal UX survey and found a 9-to-4 preference for Figma, and those who voted for Sketch did not indicate they were very attached to it. Designers loved Figma's cleaner interface, found it significantly easier to set up clickable prototypes, and the fact that it runs in the browser meant we could seamlessly share prototypes and collaborate across teams and operating systems. <br><br>I also set up a shared backlog and divided the component-building work among the team to see how fast we could move.
<br><br><div>After I tested the initial sketch to Figma migration tool to decent success, we used our actual SAIL design system and react component as our source of truth. The hackathon was successful in creating a POC. We showed that Figma's components variants were vastly superior to Sketch symbols and symbol trees. Instead of diving through deeply nested Sketch symbols, designers could just drag an asset in and easily toggle properties. This also drastically reduced the number of components we needed to maintain. 
<br><br>
These evidence-based findings—both the survey results and the hackathon performance—formed the core of a formal proposal that I drafted that then won leadership buy-in and secured Figma enterprise licenses."</div>
---SLIDE---
<strong>Slide 17: Figma Component & SAIL Parameter Parity</strong><br/><br/>
"During the build phase, I worked closely with our front-end developers to align our design system with their implementation methods.
<br/><br/>
Because Appian developers code using SAIL components, we mapped our Figma variants directly to the parameters in the SAIL codebase. For a designer, this means unparalleled ease of use: you just bring a library asset onto the canvas, and toggle its properties in the right sidebar exactly how a developer configures it in code. We also used Auto Layout constraints so components resized fluidly. This 1:1 parity eliminated guesswork for our developers."
---SLIDE---
<strong>Slide 18: Design Library Maintenance &amp; Standards</strong><br><br>
"A component library is only useful if it stays clean. Without strict standards, design libraries quickly get cluttered and drift away from the codebase.
<br><br>
To prevent this, I created a working group. I maintained a structured backlog to track component requests just like software bugs, and we introduced a strict branching workflow in the Figma library. When a designer updates a component, they work in an isolated branch. That branch is peer-reviewed by the working group before being merged. This ensures our library stays reliable."
---SLIDE---
<strong>Slide 19: Figma Community Release &amp; AI-Assisted Workflows</strong><br><br>
"Once our internal team was aligned, we realized our external partners who build custom Appian integrations would benefit from this library too.
<br><br>
I led the effort to publish our library to the public Figma Community. To date, it has been adopted more than 1,000 external designers and clients, earning praise and garnering many requests for continued enhancements from customers like NASDAQ.<br><br>
Most recently, I have integrated the Figma MCP, into our design pipeline. This protocol connects our Figma design library data directly to AI tools. By loading our exact component structures and constraints into AI contexts, we drastically speed up new component creation and library updates."
---SLIDE---
<strong>Slide 20: The UX Chapter: Peer-to-Peer Knowledge Sharing</strong><br><br>
"Beyond building the Figma library itself, I wanted to focus on how we scale design knowledge across our entire team. I restructured our monthly internal forum, the UX Chapter, transitioning it from passive lectures to active, designer-led workshops. Since 2023, we have facilitated 35 interactive sessions covering updates like Figma variables, design standards, and AI-assisted workflows. By empowering different designers to lead workshops based on their strengths, we democratized knowledge-sharing and successfully elevated the entire team's skill level, ensuring consistent design practices across our organization."
---SLIDE---
<strong>Slide 21: Usability Testing Coded Prototypes</strong><br><br>
"Another key area of design operations was optimizing our usability testing. We began utilizing high-fidelity vibe-coded HTML/JS prototypes for testing early in the cycle, which allowed us to evaluate complex logic, validations, and database rules that are difficult or impossible to simulate in standard design tools. However, during testing, we identified a critical bottleneck: participants struggled to navigate between the prototype itself and the usability tasks, which were hosted in separate documents. This constant context-switching disrupted their flow and impacted the quality of the usability feedback."
---SLIDE---
<strong>Slide 22: Tooling Innovation: Usability Study Overlay</strong><br><br>
"To address this context-switching issue and elevate our testing standard, I proactively developed a plug-and-play usability study overlay. This lightweight, floating panel is injected directly onto the prototype page, keeping tasks in the participant's immediate focus. It includes task navigation, minimizable controls, and a custom back button that simulates browser history. I contributed this tool back to the UX team as a Kiro power and a standalone script, allowing any designer to spin up structured, high-fidelity usability tests in seconds, reducing duplicated effort, and ensuring our team's output serves as a reliable, high-quality standard."
---SLIDE---
<strong>Slide 23: Q&amp;A &amp; Discussion</strong><br><br>
"And that brings us to the end of my presentation. I want to thank you all so much for your time and attention today. I would love to open up the floor now for any questions or discussion you might have regarding our Figma component library, our Design Operations scaling efforts, the usability study overlay, or anything else about my portfolio and approach. Thank you."
