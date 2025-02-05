/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#account_id WorkerScript#account_id}
  */
  readonly accountId: string;
  /**
  * The date to use for the compatibility flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#compatibility_date WorkerScript#compatibility_date}
  */
  readonly compatibilityDate?: string;
  /**
  * Compatibility flags used for Worker Scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#compatibility_flags WorkerScript#compatibility_flags}
  */
  readonly compatibilityFlags?: string[];
  /**
  * The script content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#content WorkerScript#content}
  */
  readonly content: string;
  /**
  * Name of the Workers for Platforms dispatch namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#dispatch_namespace WorkerScript#dispatch_namespace}
  */
  readonly dispatchNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#id WorkerScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enabling allows Worker events to be sent to a defined Logpush destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#logpush WorkerScript#logpush}
  */
  readonly logpush?: boolean | cdktf.IResolvable;
  /**
  * Whether to upload Worker as a module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#module WorkerScript#module}
  */
  readonly module?: boolean | cdktf.IResolvable;
  /**
  * The name for the script. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#name WorkerScript#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#tags WorkerScript#tags}
  */
  readonly tags?: string[];
  /**
  * analytics_engine_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#analytics_engine_binding WorkerScript#analytics_engine_binding}
  */
  readonly analyticsEngineBinding?: WorkerScriptAnalyticsEngineBinding[] | cdktf.IResolvable;
  /**
  * d1_database_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#d1_database_binding WorkerScript#d1_database_binding}
  */
  readonly d1DatabaseBinding?: WorkerScriptD1DatabaseBinding[] | cdktf.IResolvable;
  /**
  * hyperdrive_config_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#hyperdrive_config_binding WorkerScript#hyperdrive_config_binding}
  */
  readonly hyperdriveConfigBinding?: WorkerScriptHyperdriveConfigBinding[] | cdktf.IResolvable;
  /**
  * kv_namespace_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#kv_namespace_binding WorkerScript#kv_namespace_binding}
  */
  readonly kvNamespaceBinding?: WorkerScriptKvNamespaceBinding[] | cdktf.IResolvable;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#placement WorkerScript#placement}
  */
  readonly placement?: WorkerScriptPlacement[] | cdktf.IResolvable;
  /**
  * plain_text_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#plain_text_binding WorkerScript#plain_text_binding}
  */
  readonly plainTextBinding?: WorkerScriptPlainTextBinding[] | cdktf.IResolvable;
  /**
  * queue_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#queue_binding WorkerScript#queue_binding}
  */
  readonly queueBinding?: WorkerScriptQueueBinding[] | cdktf.IResolvable;
  /**
  * r2_bucket_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#r2_bucket_binding WorkerScript#r2_bucket_binding}
  */
  readonly r2BucketBinding?: WorkerScriptR2BucketBinding[] | cdktf.IResolvable;
  /**
  * secret_text_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#secret_text_binding WorkerScript#secret_text_binding}
  */
  readonly secretTextBinding?: WorkerScriptSecretTextBinding[] | cdktf.IResolvable;
  /**
  * service_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#service_binding WorkerScript#service_binding}
  */
  readonly serviceBinding?: WorkerScriptServiceBinding[] | cdktf.IResolvable;
  /**
  * webassembly_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#webassembly_binding WorkerScript#webassembly_binding}
  */
  readonly webassemblyBinding?: WorkerScriptWebassemblyBinding[] | cdktf.IResolvable;
}
export interface WorkerScriptAnalyticsEngineBinding {
  /**
  * The name of the Analytics Engine dataset to write to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#dataset WorkerScript#dataset}
  */
  readonly dataset: string;
  /**
  * The global variable for the binding in your Worker code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#name WorkerScript#name}
  */
  readonly name: string;
}

export function workerScriptAnalyticsEngineBindingToTerraform(struct?: WorkerScriptAnalyticsEngineBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workerScriptAnalyticsEngineBindingToHclTerraform(struct?: WorkerScriptAnalyticsEngineBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerScriptAnalyticsEngineBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkerScriptAnalyticsEngineBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerScriptAnalyticsEngineBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
      this._name = value.name;
    }
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class WorkerScriptAnalyticsEngineBindingList extends cdktf.ComplexList {
  public internalValue? : WorkerScriptAnalyticsEngineBinding[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkerScriptAnalyticsEngineBindingOutputReference {
    return new WorkerScriptAnalyticsEngineBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerScriptD1DatabaseBinding {
  /**
  * Database ID of D1 database to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#database_id WorkerScript#database_id}
  */
  readonly databaseId: string;
  /**
  * The global variable for the binding in your Worker code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#name WorkerScript#name}
  */
  readonly name: string;
}

export function workerScriptD1DatabaseBindingToTerraform(struct?: WorkerScriptD1DatabaseBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_id: cdktf.stringToTerraform(struct!.databaseId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workerScriptD1DatabaseBindingToHclTerraform(struct?: WorkerScriptD1DatabaseBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerScriptD1DatabaseBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkerScriptD1DatabaseBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerScriptD1DatabaseBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseId = value.databaseId;
      this._name = value.name;
    }
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class WorkerScriptD1DatabaseBindingList extends cdktf.ComplexList {
  public internalValue? : WorkerScriptD1DatabaseBinding[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkerScriptD1DatabaseBindingOutputReference {
    return new WorkerScriptD1DatabaseBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerScriptHyperdriveConfigBinding {
  /**
  * The global variable for the binding in your Worker code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#binding WorkerScript#binding}
  */
  readonly binding: string;
  /**
  * The ID of the Hyperdrive config to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#id WorkerScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function workerScriptHyperdriveConfigBindingToTerraform(struct?: WorkerScriptHyperdriveConfigBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: cdktf.stringToTerraform(struct!.binding),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function workerScriptHyperdriveConfigBindingToHclTerraform(struct?: WorkerScriptHyperdriveConfigBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: cdktf.stringToHclTerraform(struct!.binding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerScriptHyperdriveConfigBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkerScriptHyperdriveConfigBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerScriptHyperdriveConfigBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding = value.binding;
      this._id = value.id;
    }
  }

  // binding - computed: false, optional: false, required: true
  private _binding?: string; 
  public get binding() {
    return this.getStringAttribute('binding');
  }
  public set binding(value: string) {
    this._binding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class WorkerScriptHyperdriveConfigBindingList extends cdktf.ComplexList {
  public internalValue? : WorkerScriptHyperdriveConfigBinding[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkerScriptHyperdriveConfigBindingOutputReference {
    return new WorkerScriptHyperdriveConfigBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerScriptKvNamespaceBinding {
  /**
  * The global variable for the binding in your Worker code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#name WorkerScript#name}
  */
  readonly name: string;
  /**
  * ID of the KV namespace you want to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#namespace_id WorkerScript#namespace_id}
  */
  readonly namespaceId: string;
}

export function workerScriptKvNamespaceBindingToTerraform(struct?: WorkerScriptKvNamespaceBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
  }
}


export function workerScriptKvNamespaceBindingToHclTerraform(struct?: WorkerScriptKvNamespaceBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_id: {
      value: cdktf.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerScriptKvNamespaceBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkerScriptKvNamespaceBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerScriptKvNamespaceBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespaceId = value.namespaceId;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }
}

export class WorkerScriptKvNamespaceBindingList extends cdktf.ComplexList {
  public internalValue? : WorkerScriptKvNamespaceBinding[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkerScriptKvNamespaceBindingOutputReference {
    return new WorkerScriptKvNamespaceBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerScriptPlacement {
  /**
  * The placement mode for the Worker. Available values: `smart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#mode WorkerScript#mode}
  */
  readonly mode: string;
}

export function workerScriptPlacementToTerraform(struct?: WorkerScriptPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function workerScriptPlacementToHclTerraform(struct?: WorkerScriptPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerScriptPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkerScriptPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerScriptPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class WorkerScriptPlacementList extends cdktf.ComplexList {
  public internalValue? : WorkerScriptPlacement[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkerScriptPlacementOutputReference {
    return new WorkerScriptPlacementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerScriptPlainTextBinding {
  /**
  * The global variable for the binding in your Worker code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#name WorkerScript#name}
  */
  readonly name: string;
  /**
  * The plain text you want to store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#text WorkerScript#text}
  */
  readonly text: string;
}

export function workerScriptPlainTextBindingToTerraform(struct?: WorkerScriptPlainTextBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function workerScriptPlainTextBindingToHclTerraform(struct?: WorkerScriptPlainTextBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerScriptPlainTextBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkerScriptPlainTextBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerScriptPlainTextBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._text = value.text;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class WorkerScriptPlainTextBindingList extends cdktf.ComplexList {
  public internalValue? : WorkerScriptPlainTextBinding[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkerScriptPlainTextBindingOutputReference {
    return new WorkerScriptPlainTextBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerScriptQueueBinding {
  /**
  * The name of the global variable for the binding in your Worker code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#binding WorkerScript#binding}
  */
  readonly binding: string;
  /**
  * Name of the queue you want to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#queue WorkerScript#queue}
  */
  readonly queue: string;
}

export function workerScriptQueueBindingToTerraform(struct?: WorkerScriptQueueBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: cdktf.stringToTerraform(struct!.binding),
    queue: cdktf.stringToTerraform(struct!.queue),
  }
}


export function workerScriptQueueBindingToHclTerraform(struct?: WorkerScriptQueueBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: cdktf.stringToHclTerraform(struct!.binding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue: {
      value: cdktf.stringToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerScriptQueueBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkerScriptQueueBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerScriptQueueBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding = undefined;
      this._queue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding = value.binding;
      this._queue = value.queue;
    }
  }

  // binding - computed: false, optional: false, required: true
  private _binding?: string; 
  public get binding() {
    return this.getStringAttribute('binding');
  }
  public set binding(value: string) {
    this._binding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
  }

  // queue - computed: false, optional: false, required: true
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }
}

export class WorkerScriptQueueBindingList extends cdktf.ComplexList {
  public internalValue? : WorkerScriptQueueBinding[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkerScriptQueueBindingOutputReference {
    return new WorkerScriptQueueBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerScriptR2BucketBinding {
  /**
  * The name of the Bucket to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#bucket_name WorkerScript#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The global variable for the binding in your Worker code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#name WorkerScript#name}
  */
  readonly name: string;
}

export function workerScriptR2BucketBindingToTerraform(struct?: WorkerScriptR2BucketBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workerScriptR2BucketBindingToHclTerraform(struct?: WorkerScriptR2BucketBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerScriptR2BucketBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkerScriptR2BucketBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerScriptR2BucketBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._name = value.name;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class WorkerScriptR2BucketBindingList extends cdktf.ComplexList {
  public internalValue? : WorkerScriptR2BucketBinding[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkerScriptR2BucketBindingOutputReference {
    return new WorkerScriptR2BucketBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerScriptSecretTextBinding {
  /**
  * The global variable for the binding in your Worker code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#name WorkerScript#name}
  */
  readonly name: string;
  /**
  * The secret text you want to store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#text WorkerScript#text}
  */
  readonly text: string;
}

export function workerScriptSecretTextBindingToTerraform(struct?: WorkerScriptSecretTextBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function workerScriptSecretTextBindingToHclTerraform(struct?: WorkerScriptSecretTextBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerScriptSecretTextBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkerScriptSecretTextBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerScriptSecretTextBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._text = value.text;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class WorkerScriptSecretTextBindingList extends cdktf.ComplexList {
  public internalValue? : WorkerScriptSecretTextBinding[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkerScriptSecretTextBindingOutputReference {
    return new WorkerScriptSecretTextBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerScriptServiceBinding {
  /**
  * The name of the Worker environment to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#environment WorkerScript#environment}
  */
  readonly environment?: string;
  /**
  * The global variable for the binding in your Worker code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#name WorkerScript#name}
  */
  readonly name: string;
  /**
  * The name of the Worker to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#service WorkerScript#service}
  */
  readonly service: string;
}

export function workerScriptServiceBindingToTerraform(struct?: WorkerScriptServiceBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    name: cdktf.stringToTerraform(struct!.name),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function workerScriptServiceBindingToHclTerraform(struct?: WorkerScriptServiceBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerScriptServiceBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkerScriptServiceBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerScriptServiceBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._name = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._name = value.name;
      this._service = value.service;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class WorkerScriptServiceBindingList extends cdktf.ComplexList {
  public internalValue? : WorkerScriptServiceBinding[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkerScriptServiceBindingOutputReference {
    return new WorkerScriptServiceBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerScriptWebassemblyBinding {
  /**
  * The base64 encoded wasm module you want to store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#module WorkerScript#module}
  */
  readonly module: string;
  /**
  * The global variable for the binding in your Worker code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#name WorkerScript#name}
  */
  readonly name: string;
}

export function workerScriptWebassemblyBindingToTerraform(struct?: WorkerScriptWebassemblyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    module: cdktf.stringToTerraform(struct!.module),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workerScriptWebassemblyBindingToHclTerraform(struct?: WorkerScriptWebassemblyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    module: {
      value: cdktf.stringToHclTerraform(struct!.module),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerScriptWebassemblyBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkerScriptWebassemblyBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._module !== undefined) {
      hasAnyValues = true;
      internalValueResult.module = this._module;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerScriptWebassemblyBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._module = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._module = value.module;
      this._name = value.name;
    }
  }

  // module - computed: false, optional: false, required: true
  private _module?: string; 
  public get module() {
    return this.getStringAttribute('module');
  }
  public set module(value: string) {
    this._module = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class WorkerScriptWebassemblyBindingList extends cdktf.ComplexList {
  public internalValue? : WorkerScriptWebassemblyBinding[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkerScriptWebassemblyBindingOutputReference {
    return new WorkerScriptWebassemblyBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script cloudflare_worker_script}
*/
export class WorkerScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_worker_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkerScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkerScript to import
  * @param importFromId The id of the existing WorkerScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkerScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/worker_script cloudflare_worker_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkerScriptConfig
  */
  public constructor(scope: Construct, id: string, config: WorkerScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_worker_script',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.52.0',
        providerVersionConstraint: '~> 4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._compatibilityDate = config.compatibilityDate;
    this._compatibilityFlags = config.compatibilityFlags;
    this._content = config.content;
    this._dispatchNamespace = config.dispatchNamespace;
    this._id = config.id;
    this._logpush = config.logpush;
    this._module = config.module;
    this._name = config.name;
    this._tags = config.tags;
    this._analyticsEngineBinding.internalValue = config.analyticsEngineBinding;
    this._d1DatabaseBinding.internalValue = config.d1DatabaseBinding;
    this._hyperdriveConfigBinding.internalValue = config.hyperdriveConfigBinding;
    this._kvNamespaceBinding.internalValue = config.kvNamespaceBinding;
    this._placement.internalValue = config.placement;
    this._plainTextBinding.internalValue = config.plainTextBinding;
    this._queueBinding.internalValue = config.queueBinding;
    this._r2BucketBinding.internalValue = config.r2BucketBinding;
    this._secretTextBinding.internalValue = config.secretTextBinding;
    this._serviceBinding.internalValue = config.serviceBinding;
    this._webassemblyBinding.internalValue = config.webassemblyBinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // compatibility_date - computed: false, optional: true, required: false
  private _compatibilityDate?: string; 
  public get compatibilityDate() {
    return this.getStringAttribute('compatibility_date');
  }
  public set compatibilityDate(value: string) {
    this._compatibilityDate = value;
  }
  public resetCompatibilityDate() {
    this._compatibilityDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityDateInput() {
    return this._compatibilityDate;
  }

  // compatibility_flags - computed: true, optional: true, required: false
  private _compatibilityFlags?: string[]; 
  public get compatibilityFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('compatibility_flags'));
  }
  public set compatibilityFlags(value: string[]) {
    this._compatibilityFlags = value;
  }
  public resetCompatibilityFlags() {
    this._compatibilityFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityFlagsInput() {
    return this._compatibilityFlags;
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // dispatch_namespace - computed: false, optional: true, required: false
  private _dispatchNamespace?: string; 
  public get dispatchNamespace() {
    return this.getStringAttribute('dispatch_namespace');
  }
  public set dispatchNamespace(value: string) {
    this._dispatchNamespace = value;
  }
  public resetDispatchNamespace() {
    this._dispatchNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchNamespaceInput() {
    return this._dispatchNamespace;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // logpush - computed: false, optional: true, required: false
  private _logpush?: boolean | cdktf.IResolvable; 
  public get logpush() {
    return this.getBooleanAttribute('logpush');
  }
  public set logpush(value: boolean | cdktf.IResolvable) {
    this._logpush = value;
  }
  public resetLogpush() {
    this._logpush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logpushInput() {
    return this._logpush;
  }

  // module - computed: false, optional: true, required: false
  private _module?: boolean | cdktf.IResolvable; 
  public get module() {
    return this.getBooleanAttribute('module');
  }
  public set module(value: boolean | cdktf.IResolvable) {
    this._module = value;
  }
  public resetModule() {
    this._module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // analytics_engine_binding - computed: false, optional: true, required: false
  private _analyticsEngineBinding = new WorkerScriptAnalyticsEngineBindingList(this, "analytics_engine_binding", true);
  public get analyticsEngineBinding() {
    return this._analyticsEngineBinding;
  }
  public putAnalyticsEngineBinding(value: WorkerScriptAnalyticsEngineBinding[] | cdktf.IResolvable) {
    this._analyticsEngineBinding.internalValue = value;
  }
  public resetAnalyticsEngineBinding() {
    this._analyticsEngineBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsEngineBindingInput() {
    return this._analyticsEngineBinding.internalValue;
  }

  // d1_database_binding - computed: false, optional: true, required: false
  private _d1DatabaseBinding = new WorkerScriptD1DatabaseBindingList(this, "d1_database_binding", true);
  public get d1DatabaseBinding() {
    return this._d1DatabaseBinding;
  }
  public putD1DatabaseBinding(value: WorkerScriptD1DatabaseBinding[] | cdktf.IResolvable) {
    this._d1DatabaseBinding.internalValue = value;
  }
  public resetD1DatabaseBinding() {
    this._d1DatabaseBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get d1DatabaseBindingInput() {
    return this._d1DatabaseBinding.internalValue;
  }

  // hyperdrive_config_binding - computed: false, optional: true, required: false
  private _hyperdriveConfigBinding = new WorkerScriptHyperdriveConfigBindingList(this, "hyperdrive_config_binding", true);
  public get hyperdriveConfigBinding() {
    return this._hyperdriveConfigBinding;
  }
  public putHyperdriveConfigBinding(value: WorkerScriptHyperdriveConfigBinding[] | cdktf.IResolvable) {
    this._hyperdriveConfigBinding.internalValue = value;
  }
  public resetHyperdriveConfigBinding() {
    this._hyperdriveConfigBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperdriveConfigBindingInput() {
    return this._hyperdriveConfigBinding.internalValue;
  }

  // kv_namespace_binding - computed: false, optional: true, required: false
  private _kvNamespaceBinding = new WorkerScriptKvNamespaceBindingList(this, "kv_namespace_binding", true);
  public get kvNamespaceBinding() {
    return this._kvNamespaceBinding;
  }
  public putKvNamespaceBinding(value: WorkerScriptKvNamespaceBinding[] | cdktf.IResolvable) {
    this._kvNamespaceBinding.internalValue = value;
  }
  public resetKvNamespaceBinding() {
    this._kvNamespaceBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvNamespaceBindingInput() {
    return this._kvNamespaceBinding.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new WorkerScriptPlacementList(this, "placement", true);
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: WorkerScriptPlacement[] | cdktf.IResolvable) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // plain_text_binding - computed: false, optional: true, required: false
  private _plainTextBinding = new WorkerScriptPlainTextBindingList(this, "plain_text_binding", true);
  public get plainTextBinding() {
    return this._plainTextBinding;
  }
  public putPlainTextBinding(value: WorkerScriptPlainTextBinding[] | cdktf.IResolvable) {
    this._plainTextBinding.internalValue = value;
  }
  public resetPlainTextBinding() {
    this._plainTextBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextBindingInput() {
    return this._plainTextBinding.internalValue;
  }

  // queue_binding - computed: false, optional: true, required: false
  private _queueBinding = new WorkerScriptQueueBindingList(this, "queue_binding", true);
  public get queueBinding() {
    return this._queueBinding;
  }
  public putQueueBinding(value: WorkerScriptQueueBinding[] | cdktf.IResolvable) {
    this._queueBinding.internalValue = value;
  }
  public resetQueueBinding() {
    this._queueBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueBindingInput() {
    return this._queueBinding.internalValue;
  }

  // r2_bucket_binding - computed: false, optional: true, required: false
  private _r2BucketBinding = new WorkerScriptR2BucketBindingList(this, "r2_bucket_binding", true);
  public get r2BucketBinding() {
    return this._r2BucketBinding;
  }
  public putR2BucketBinding(value: WorkerScriptR2BucketBinding[] | cdktf.IResolvable) {
    this._r2BucketBinding.internalValue = value;
  }
  public resetR2BucketBinding() {
    this._r2BucketBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r2BucketBindingInput() {
    return this._r2BucketBinding.internalValue;
  }

  // secret_text_binding - computed: false, optional: true, required: false
  private _secretTextBinding = new WorkerScriptSecretTextBindingList(this, "secret_text_binding", true);
  public get secretTextBinding() {
    return this._secretTextBinding;
  }
  public putSecretTextBinding(value: WorkerScriptSecretTextBinding[] | cdktf.IResolvable) {
    this._secretTextBinding.internalValue = value;
  }
  public resetSecretTextBinding() {
    this._secretTextBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTextBindingInput() {
    return this._secretTextBinding.internalValue;
  }

  // service_binding - computed: false, optional: true, required: false
  private _serviceBinding = new WorkerScriptServiceBindingList(this, "service_binding", true);
  public get serviceBinding() {
    return this._serviceBinding;
  }
  public putServiceBinding(value: WorkerScriptServiceBinding[] | cdktf.IResolvable) {
    this._serviceBinding.internalValue = value;
  }
  public resetServiceBinding() {
    this._serviceBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBindingInput() {
    return this._serviceBinding.internalValue;
  }

  // webassembly_binding - computed: false, optional: true, required: false
  private _webassemblyBinding = new WorkerScriptWebassemblyBindingList(this, "webassembly_binding", true);
  public get webassemblyBinding() {
    return this._webassemblyBinding;
  }
  public putWebassemblyBinding(value: WorkerScriptWebassemblyBinding[] | cdktf.IResolvable) {
    this._webassemblyBinding.internalValue = value;
  }
  public resetWebassemblyBinding() {
    this._webassemblyBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webassemblyBindingInput() {
    return this._webassemblyBinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      compatibility_date: cdktf.stringToTerraform(this._compatibilityDate),
      compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibilityFlags),
      content: cdktf.stringToTerraform(this._content),
      dispatch_namespace: cdktf.stringToTerraform(this._dispatchNamespace),
      id: cdktf.stringToTerraform(this._id),
      logpush: cdktf.booleanToTerraform(this._logpush),
      module: cdktf.booleanToTerraform(this._module),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      analytics_engine_binding: cdktf.listMapper(workerScriptAnalyticsEngineBindingToTerraform, true)(this._analyticsEngineBinding.internalValue),
      d1_database_binding: cdktf.listMapper(workerScriptD1DatabaseBindingToTerraform, true)(this._d1DatabaseBinding.internalValue),
      hyperdrive_config_binding: cdktf.listMapper(workerScriptHyperdriveConfigBindingToTerraform, true)(this._hyperdriveConfigBinding.internalValue),
      kv_namespace_binding: cdktf.listMapper(workerScriptKvNamespaceBindingToTerraform, true)(this._kvNamespaceBinding.internalValue),
      placement: cdktf.listMapper(workerScriptPlacementToTerraform, true)(this._placement.internalValue),
      plain_text_binding: cdktf.listMapper(workerScriptPlainTextBindingToTerraform, true)(this._plainTextBinding.internalValue),
      queue_binding: cdktf.listMapper(workerScriptQueueBindingToTerraform, true)(this._queueBinding.internalValue),
      r2_bucket_binding: cdktf.listMapper(workerScriptR2BucketBindingToTerraform, true)(this._r2BucketBinding.internalValue),
      secret_text_binding: cdktf.listMapper(workerScriptSecretTextBindingToTerraform, true)(this._secretTextBinding.internalValue),
      service_binding: cdktf.listMapper(workerScriptServiceBindingToTerraform, true)(this._serviceBinding.internalValue),
      webassembly_binding: cdktf.listMapper(workerScriptWebassemblyBindingToTerraform, true)(this._webassemblyBinding.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compatibility_date: {
        value: cdktf.stringToHclTerraform(this._compatibilityDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compatibility_flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compatibilityFlags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dispatch_namespace: {
        value: cdktf.stringToHclTerraform(this._dispatchNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logpush: {
        value: cdktf.booleanToHclTerraform(this._logpush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      module: {
        value: cdktf.booleanToHclTerraform(this._module),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      analytics_engine_binding: {
        value: cdktf.listMapperHcl(workerScriptAnalyticsEngineBindingToHclTerraform, true)(this._analyticsEngineBinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerScriptAnalyticsEngineBindingList",
      },
      d1_database_binding: {
        value: cdktf.listMapperHcl(workerScriptD1DatabaseBindingToHclTerraform, true)(this._d1DatabaseBinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerScriptD1DatabaseBindingList",
      },
      hyperdrive_config_binding: {
        value: cdktf.listMapperHcl(workerScriptHyperdriveConfigBindingToHclTerraform, true)(this._hyperdriveConfigBinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerScriptHyperdriveConfigBindingList",
      },
      kv_namespace_binding: {
        value: cdktf.listMapperHcl(workerScriptKvNamespaceBindingToHclTerraform, true)(this._kvNamespaceBinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerScriptKvNamespaceBindingList",
      },
      placement: {
        value: cdktf.listMapperHcl(workerScriptPlacementToHclTerraform, true)(this._placement.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerScriptPlacementList",
      },
      plain_text_binding: {
        value: cdktf.listMapperHcl(workerScriptPlainTextBindingToHclTerraform, true)(this._plainTextBinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerScriptPlainTextBindingList",
      },
      queue_binding: {
        value: cdktf.listMapperHcl(workerScriptQueueBindingToHclTerraform, true)(this._queueBinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerScriptQueueBindingList",
      },
      r2_bucket_binding: {
        value: cdktf.listMapperHcl(workerScriptR2BucketBindingToHclTerraform, true)(this._r2BucketBinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerScriptR2BucketBindingList",
      },
      secret_text_binding: {
        value: cdktf.listMapperHcl(workerScriptSecretTextBindingToHclTerraform, true)(this._secretTextBinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerScriptSecretTextBindingList",
      },
      service_binding: {
        value: cdktf.listMapperHcl(workerScriptServiceBindingToHclTerraform, true)(this._serviceBinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerScriptServiceBindingList",
      },
      webassembly_binding: {
        value: cdktf.listMapperHcl(workerScriptWebassemblyBindingToHclTerraform, true)(this._webassemblyBinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerScriptWebassemblyBindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
