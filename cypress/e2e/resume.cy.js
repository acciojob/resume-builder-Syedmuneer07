// Cypress E2E Test ─ Hindi comments
describe("Resume Builder", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // होम पेज खोलो
  });

  /* ---------- 1. Profile page ---------- */
  it("fills profile and navigates", () => {
    cy.get("input[name=fname]").type("Rahul");
    cy.get("input[name=lname]").type("Sharma");
    cy.get("input[name=phone]").type("9876543210");
    cy.get("input[name=address]").type("Mumbai");
    cy.get("input[name=url]").type("https://i.pravatar.cc/150?img=3");
    cy.contains("button", "Save").click();
    cy.get("#next").click(); // Education पर जाओ
  });

  /* ---------- 2. Education page ---------- */
  it("adds education", () => {
    cy.get("#next").click(); // Profile → Education
    cy.get("input[name=courseName]").type("B.Tech");
    cy.get("input[name=completionYear]").type("2023");
    cy.get("input[name=college]").type("IIT Bombay");
    cy.get("input[name=percentage]").type("85");
    cy.get("#add_education").click();
    cy.get(".item").should("contain", "B.Tech");
  });

  /* ---------- 3. Skills page ---------- */
  it("adds skill", () => {
    cy.get("#next").click(); // Profile → Education
    cy.get("#next").click(); // Education → Skills
    cy.contains("Skills"); // पेज आने का इंतज़ार
    cy.get("input[name=skill]").type("React");
    cy.get("#add_skill").click();
    cy.get(".item").should("contain", "React");
  });

  /* ---------- 4. Projects page ---------- */
  it("adds project", () => {
    cy.get("#next").click(); // Profile → Education
    cy.get("#next").click(); // Education → Skills
    cy.get("#next").click(); // Skills → Projects
    cy.contains("Projects"); // पेज आने का इंतज़ार
    cy.get("input[name=projectName]").type("E-Commerce");
    cy.get("input[name=techStack]").type("MERN");
    cy.get("input[name=description]").type("Full-stack shopping site");
    cy.get("#add_project").click();
    cy.get(".item").should("contain", "E-Commerce");
  });

  /* ---------- 5. Social page ---------- */
  it("adds social link", () => {
    cy.get("#next").click(); // Profile → Education
    cy.get("#next").click(); // Education → Skills
    cy.get("#next").click(); // Skills → Projects
    cy.get("#next").click(); // Projects → Social  (सिर्फ़ एक बार #next)
    cy.contains("Social Media"); // ← यहीं इंतज़ार करो
    cy.get("input[name=Social]").type("https://github.com/rahul");
    cy.get("#add_social").click();
    cy.get(".item").should("contain", "github.com/rahul");
  });

  /* ---------- 6. Final Resume page ---------- */
  it("shows final resume", () => {
    // profile
    cy.get("input[name=fname]").type("Rahul");
    cy.get("input[name=lname]").type("Sharma");
    cy.get("input[name=phone]").type("9876543210");
    cy.get("input[name=address]").type("Mumbai");
    cy.get("input[name=url]").type("https://i.pravatar.cc/150?img=3");
    cy.contains("button", "Save").click();

    // education
    cy.get("#next").click();
    cy.get("input[name=courseName]").type("B.Tech");
    cy.get("input[name=completionYear]").type("2023");
    cy.get("input[name=college]").type("IIT Bombay");
    cy.get("input[name=percentage]").type("85");
    cy.get("#add_education").click();

    // skills
    cy.get("#next").click();
    cy.get("input[name=skill]").type("React");
    cy.get("#add_skill").click();

    // projects
    cy.get("#next").click();
    cy.get("input[name=projectName]").type("E-Commerce");
    cy.get("input[name=techStack]").type("MERN");
    cy.get("input[name=description]").type("Full-stack shopping site");
    cy.get("#add_project").click();

    // social
    cy.get("#next").click();
    cy.get("input[name=Social]").type("https://github.com/rahul");
    cy.get("#add_social").click();

    // resume page
    cy.get("#next").click(); // Social → Resume
    cy.contains("Resume"); // Resume page आ गया?
    cy.contains("Rahul Sharma");
    cy.contains("9876543210");
    cy.contains("B.Tech (2023)");
    cy.contains("React");
    cy.contains("E-Commerce");
    cy.contains("github.com/rahul");
  });
});
