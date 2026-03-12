import type { AxiosError } from 'axios';

export type DummyJsonError = AxiosError<{ message: string }>;
