import {
  Getter as vGetter, GetterTree as vGetterTree, MutationTree as vMutationTree,
  Mutation as vMutation, ActionTree as vActionTree, Action as vAction
} from 'vuex';
import { BindingHelper } from 'vuex-class/lib/bindings';
import { RootState } from './index';

// type alias
type Getter<S, R> = vGetter<S, R>;
type GetterTree<S, R> = vGetterTree<S, R>;
type MutationTree<S> = vMutationTree<S>;
type Mutation<S> = vMutation<S>;
type ActionTree<S, R> = vActionTree<S, R>;
type Action<S, R> = vAction<S, R>;

export function getter<S, T extends GetterTree<S, RootState>>(state: S, getters: T): {[K in keyof T]: Getter<S, RootState>} {
  return getters;
}

export function mutation<S, T extends MutationTree<S>>(state: S, mutations: T): {[K in keyof T]: Mutation<S> } {
  return mutations;
}

export function action<S, T extends ActionTree<S, RootState>>(state: S, actions: T): {[K in keyof T]: Action<S, RootState> } {
  return actions;
}

export function decorator<D extends BindingHelper, T>(helper: D, keyMap: T) {
  type KeyType = keyof T;
  type Decorator = (target, key: string) => any;

  function decoratorWrapper(target, key: KeyType): void;
  function decoratorWrapper(originKey: KeyType): Decorator;
  function decoratorWrapper(a: any | KeyType, b?: KeyType): Decorator | void {
    if (typeof b === 'string') {
      const target = a;
      const key = b;
      return helper(target, key);
    }
    return helper(a);
  }
  return decoratorWrapper;
}

export function keymirror<T>(obj: T): {[K in keyof T]: string } {
  const result: any = {};
  for (let key in obj)
    if ((obj as Object).hasOwnProperty(key)) result[key] = key;

  return result as {[K in keyof T]: K };
}
