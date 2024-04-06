import { writable, type Writable } from "svelte/store";
import { projects, type Project } from "../config/projects";

const selectedProject: Writable<Project> = writable(projects[0]);

export { selectedProject }