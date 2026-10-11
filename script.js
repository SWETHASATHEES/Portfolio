const projectData = {
  ev: {label:"FORECASTING · MACHINE LEARNING",title:"EV Charging Demand Forecasting",description:"A forecasting project focused on estimating future electric-vehicle charging demand to support planning and operational decisions.",focus:"Data cleaning, exploratory analysis, temporal feature engineering, chronological validation, and comparison of statistical and machine-learning forecasts. Add the final validated metrics and dashboard screenshots before publication.",tech:["Python","SARIMA","XGBoost","Walk-forward validation","Power BI"]},
  news: {label:"NLP · APPLIED RESEARCH",title:"War-Related Misinformation Detection",description:"A research project investigating machine-learning approaches to classifying war-related misinformation in social media text.",focus:"Compare TF-IDF features and contextual text representations, establish a leakage-safe evaluation strategy, examine class-level performance, and document limitations and domain shift.",tech:["Python","TF-IDF","BERT embeddings","Scikit-learn","SHAP"]},
  housing: {label:"PREDICTIVE MODELLING",title:"Housing Price Prediction",description:"A comparative analysis of house-price prediction using datasets from King County and Paris.",focus:"Explore data quality and feature relationships, train regression models, compare MAE/RMSE/R², and explain how geography and dataset differences affect model performance.",tech:["Python","Pandas","Random Forest","Gradient Boosting","Regression metrics"]},
  sales: {label:"BUSINESS INTELLIGENCE",title:"Predictive Sales Funnel Analytics",description:"A data analytics project exploring e-commerce sales data and predictive approaches to understand funnel outcomes.",focus:"Prepare and explore sales records, engineer useful predictors, compare classification models, and translate findings into recommendations for business stakeholders.",tech:["SQL","Python","Random Forest","Logistic Regression","XGBoost"]},
  customer: {label:"CUSTOMER ANALYTICS",title:"Customer Shopping Trends",description:"An exploratory customer analytics project using unsupervised learning to investigate behavioural segments and unusual observations.",focus:"Standardise suitable features, use dimensionality reduction for exploration, compare clusters, and review outliers without overstating what synthetic data can demonstrate.",tech:["K-Means","PCA","Isolation Forest","Python","Data visualisation"]}
};
const modal = document.querySelector("#project-modal");
document.querySelectorAll("[data-project]").forEach(button => button.addEventListener("click", () => {
  const data = projectData[button.dataset.project];
  if (!data) return;
  document.querySelector("#modal-label").textContent = data.label;
  document.querySelector("#modal-title").textContent = data.title;
  document.querySelector("#modal-description").textContent = data.description;
  document.querySelector("#modal-focus").textContent = data.focus;
  const tech = document.querySelector("#modal-tech");
  tech.replaceChildren(...data.tech.map(item => { const span = document.createElement("span"); span.textContent = item; return span; }));
  modal.showModal();
}));
document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", event => { if (event.target === modal) modal.close(); });
document.querySelectorAll("[data-scroll]").forEach(button => button.addEventListener("click", () => {
  const track = document.getElementById(button.dataset.scroll);
  track.scrollBy({left: Number(button.dataset.dir) * Math.max(260, track.clientWidth * .72), behavior:"smooth"});
}));
document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-filter]").forEach(chip => chip.classList.toggle("active", chip === button));
  const filter = button.dataset.filter;
  document.querySelectorAll(".project-card").forEach(card => card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter));
}));
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const nav = document.querySelector(".main-nav");
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector(".main-nav").classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
