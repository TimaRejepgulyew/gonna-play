import type {
  DefaultError,
  QueryKey,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";

export type AsyncReturnType<T extends (...props: any[]) => Promise<any>> =
  Awaited<ReturnType<T>>;

type ExtractReturnType<T> = T extends (...props: any[]) => Promise<any>
  ? AsyncReturnType<T>
  : T;

export type MutationOptions<
  TFunction,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown
> = Omit<
  UseMutationOptions<
    ExtractReturnType<TFunction>,
    TError,
    TVariables,
    TContext
  >,
  "mutationFn" | "mutationKey"
>;

export type QueryOptions<
  TFunction,
  TError = DefaultError,
  TData = ExtractReturnType<TFunction>,
  TQueryKey extends QueryKey = QueryKey
> = Omit<
  UseQueryOptions<ExtractReturnType<TFunction>, TError, TData, TQueryKey>,
  "queryFn" | "queryKey"
>;

export interface UseInfiniteEntityListByOffsetQueryProps<
  Response extends { count: number }
> extends Omit<
    UseInfiniteQueryOptions<
      Response,
      DefaultError,
      { pages: Response[] },
      Response,
      QueryKey,
      { currentOffset: number }
    >,
    "queryKey" | "queryFn"
  > {
  limit?: number;
  offset?: number;
}

export interface UseInfiniteEntityListByPageQueryProps<
  Response extends { count: number }
> extends Omit<
    UseInfiniteQueryOptions<
      Response,
      DefaultError,
      { pages: Response[] },
      Response,
      QueryKey,
      { currentPage: number; itemsToShow: number }
    >,
    "queryKey" | "queryFn"
  > {
  limit?: number;
  page?: number;
}

export interface UseInfiniteEntityListByNextPageQueryProps<
  Response extends { pagination: { next: string; total: number } }
> extends Omit<
    UseInfiniteQueryOptions<
      Response,
      DefaultError,
      { pages: Response[] },
      Response,
      QueryKey,
      { currentCursor: string | null }
    >,
    "queryKey" | "queryFn"
  > {}
