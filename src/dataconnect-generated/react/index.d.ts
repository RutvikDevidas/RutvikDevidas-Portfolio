import { SeedAllTablesData, GetMyProfileData, ListProjectsData, UpdateMyBioData, UpdateMyBioVariables, DeleteProjectData, DeleteProjectVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useSeedAllTables(options?: useDataConnectMutationOptions<SeedAllTablesData, FirebaseError, void>): UseDataConnectMutationResult<SeedAllTablesData, undefined>;
export function useSeedAllTables(dc: DataConnect, options?: useDataConnectMutationOptions<SeedAllTablesData, FirebaseError, void>): UseDataConnectMutationResult<SeedAllTablesData, undefined>;

export function useGetMyProfile(options?: useDataConnectQueryOptions<GetMyProfileData>): UseDataConnectQueryResult<GetMyProfileData, undefined>;
export function useGetMyProfile(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyProfileData>): UseDataConnectQueryResult<GetMyProfileData, undefined>;

export function useListProjects(options?: useDataConnectQueryOptions<ListProjectsData>): UseDataConnectQueryResult<ListProjectsData, undefined>;
export function useListProjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListProjectsData>): UseDataConnectQueryResult<ListProjectsData, undefined>;

export function useUpdateMyBio(options?: useDataConnectMutationOptions<UpdateMyBioData, FirebaseError, UpdateMyBioVariables>): UseDataConnectMutationResult<UpdateMyBioData, UpdateMyBioVariables>;
export function useUpdateMyBio(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateMyBioData, FirebaseError, UpdateMyBioVariables>): UseDataConnectMutationResult<UpdateMyBioData, UpdateMyBioVariables>;

export function useDeleteProject(options?: useDataConnectMutationOptions<DeleteProjectData, FirebaseError, DeleteProjectVariables>): UseDataConnectMutationResult<DeleteProjectData, DeleteProjectVariables>;
export function useDeleteProject(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteProjectData, FirebaseError, DeleteProjectVariables>): UseDataConnectMutationResult<DeleteProjectData, DeleteProjectVariables>;
