import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface ContactMessage_Key {
  id: UUIDString;
  __typename?: 'ContactMessage_Key';
}

export interface DeleteProjectData {
  project_delete?: Project_Key | null;
}

export interface DeleteProjectVariables {
  id: UUIDString;
}

export interface Experience_Key {
  id: UUIDString;
  __typename?: 'Experience_Key';
}

export interface GetMyProfileData {
  profile?: {
    fullName: string;
    email: string;
    bio: string;
    projects_on_profile: ({
      title: string;
    })[];
    skills_on_profile: ({
      name: string;
    })[];
  };
}

export interface ListProjectsData {
  projects: ({
    title: string;
    projectUrl: string;
  })[];
}

export interface Profile_Key {
  id: UUIDString;
  __typename?: 'Profile_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface SeedAllTablesData {
  profile_insert: Profile_Key;
  project_insert: Project_Key;
  skill_insert: Skill_Key;
  experience_insert: Experience_Key;
  contactMessage_insert: ContactMessage_Key;
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface UpdateMyBioData {
  profile_update?: Profile_Key | null;
}

export interface UpdateMyBioVariables {
  bio: string;
}

interface SeedAllTablesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<SeedAllTablesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<SeedAllTablesData, undefined>;
  operationName: string;
}
export const seedAllTablesRef: SeedAllTablesRef;

export function seedAllTables(): MutationPromise<SeedAllTablesData, undefined>;
export function seedAllTables(dc: DataConnect): MutationPromise<SeedAllTablesData, undefined>;

interface GetMyProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyProfileData, undefined>;
  operationName: string;
}
export const getMyProfileRef: GetMyProfileRef;

export function getMyProfile(options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;
export function getMyProfile(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;

interface ListProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProjectsData, undefined>;
  operationName: string;
}
export const listProjectsRef: ListProjectsRef;

export function listProjects(options?: ExecuteQueryOptions): QueryPromise<ListProjectsData, undefined>;
export function listProjects(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProjectsData, undefined>;

interface UpdateMyBioRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMyBioVariables): MutationRef<UpdateMyBioData, UpdateMyBioVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateMyBioVariables): MutationRef<UpdateMyBioData, UpdateMyBioVariables>;
  operationName: string;
}
export const updateMyBioRef: UpdateMyBioRef;

export function updateMyBio(vars: UpdateMyBioVariables): MutationPromise<UpdateMyBioData, UpdateMyBioVariables>;
export function updateMyBio(dc: DataConnect, vars: UpdateMyBioVariables): MutationPromise<UpdateMyBioData, UpdateMyBioVariables>;

interface DeleteProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProjectVariables): MutationRef<DeleteProjectData, DeleteProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteProjectVariables): MutationRef<DeleteProjectData, DeleteProjectVariables>;
  operationName: string;
}
export const deleteProjectRef: DeleteProjectRef;

export function deleteProject(vars: DeleteProjectVariables): MutationPromise<DeleteProjectData, DeleteProjectVariables>;
export function deleteProject(dc: DataConnect, vars: DeleteProjectVariables): MutationPromise<DeleteProjectData, DeleteProjectVariables>;

