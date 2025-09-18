/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#account_id WorkerVersion#account_id}
  */
  readonly accountId: string;
  /**
  * Metadata about the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#annotations WorkerVersion#annotations}
  */
  readonly annotations?: WorkerVersionAnnotations;
  /**
  * Configuration for assets within a Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#assets WorkerVersion#assets}
  */
  readonly assets?: WorkerVersionAssets;
  /**
  * List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#bindings WorkerVersion#bindings}
  */
  readonly bindings?: WorkerVersionBindings[] | cdktf.IResolvable;
  /**
  * Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#compatibility_date WorkerVersion#compatibility_date}
  */
  readonly compatibilityDate?: string;
  /**
  * Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#compatibility_flags WorkerVersion#compatibility_flags}
  */
  readonly compatibilityFlags?: string[];
  /**
  * Resource limits enforced at runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#limits WorkerVersion#limits}
  */
  readonly limits?: WorkerVersionLimits;
  /**
  * The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#main_module WorkerVersion#main_module}
  */
  readonly mainModule?: string;
  /**
  * Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#migrations WorkerVersion#migrations}
  */
  readonly migrations?: WorkerVersionMigrations;
  /**
  * Code, sourcemaps, and other content used at runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#modules WorkerVersion#modules}
  */
  readonly modules?: WorkerVersionModules[] | cdktf.IResolvable;
  /**
  * Placement settings for the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#placement WorkerVersion#placement}
  */
  readonly placement?: WorkerVersionPlacement;
  /**
  * Usage model for the version.
  * Available values: "standard", "bundled", "unbound".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#usage_model WorkerVersion#usage_model}
  */
  readonly usageModel?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#worker_id WorkerVersion#worker_id}
  */
  readonly workerId: string;
}
export interface WorkerVersionAnnotations {
  /**
  * Human-readable message about the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#workers_message WorkerVersion#workers_message}
  */
  readonly workersMessage?: string;
  /**
  * User-provided identifier for the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#workers_tag WorkerVersion#workers_tag}
  */
  readonly workersTag?: string;
}

export function workerVersionAnnotationsToTerraform(struct?: WorkerVersionAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workers_message: cdktf.stringToTerraform(struct!.workersMessage),
    workers_tag: cdktf.stringToTerraform(struct!.workersTag),
  }
}


export function workerVersionAnnotationsToHclTerraform(struct?: WorkerVersionAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workers_message: {
      value: cdktf.stringToHclTerraform(struct!.workersMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workers_tag: {
      value: cdktf.stringToHclTerraform(struct!.workersTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionAnnotationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerVersionAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workersMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.workersMessage = this._workersMessage;
    }
    if (this._workersTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.workersTag = this._workersTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workersMessage = undefined;
      this._workersTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workersMessage = value.workersMessage;
      this._workersTag = value.workersTag;
    }
  }

  // workers_message - computed: true, optional: true, required: false
  private _workersMessage?: string; 
  public get workersMessage() {
    return this.getStringAttribute('workers_message');
  }
  public set workersMessage(value: string) {
    this._workersMessage = value;
  }
  public resetWorkersMessage() {
    this._workersMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersMessageInput() {
    return this._workersMessage;
  }

  // workers_tag - computed: true, optional: true, required: false
  private _workersTag?: string; 
  public get workersTag() {
    return this.getStringAttribute('workers_tag');
  }
  public set workersTag(value: string) {
    this._workersTag = value;
  }
  public resetWorkersTag() {
    this._workersTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersTagInput() {
    return this._workersTag;
  }

  // workers_triggered_by - computed: true, optional: false, required: false
  public get workersTriggeredBy() {
    return this.getStringAttribute('workers_triggered_by');
  }
}
export interface WorkerVersionAssetsConfig {
  /**
  * Determines the redirects and rewrites of requests for HTML content.
  * Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#html_handling WorkerVersion#html_handling}
  */
  readonly htmlHandling?: string;
  /**
  * Determines the response when a request does not match a static asset, and there is no Worker script.
  * Available values: "none", "404-page", "single-page-application".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#not_found_handling WorkerVersion#not_found_handling}
  */
  readonly notFoundHandling?: string;
  /**
  * Contains a list path rules to control routing to either the Worker or assets. Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#run_worker_first WorkerVersion#run_worker_first}
  */
  readonly runWorkerFirst?: string[];
}

export function workerVersionAssetsConfigToTerraform(struct?: WorkerVersionAssetsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    html_handling: cdktf.stringToTerraform(struct!.htmlHandling),
    not_found_handling: cdktf.stringToTerraform(struct!.notFoundHandling),
    run_worker_first: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runWorkerFirst),
  }
}


export function workerVersionAssetsConfigToHclTerraform(struct?: WorkerVersionAssetsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    html_handling: {
      value: cdktf.stringToHclTerraform(struct!.htmlHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_found_handling: {
      value: cdktf.stringToHclTerraform(struct!.notFoundHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_worker_first: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.runWorkerFirst),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionAssetsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerVersionAssetsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._htmlHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlHandling = this._htmlHandling;
    }
    if (this._notFoundHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.notFoundHandling = this._notFoundHandling;
    }
    if (this._runWorkerFirst !== undefined) {
      hasAnyValues = true;
      internalValueResult.runWorkerFirst = this._runWorkerFirst;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionAssetsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._htmlHandling = undefined;
      this._notFoundHandling = undefined;
      this._runWorkerFirst = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._htmlHandling = value.htmlHandling;
      this._notFoundHandling = value.notFoundHandling;
      this._runWorkerFirst = value.runWorkerFirst;
    }
  }

  // html_handling - computed: false, optional: true, required: false
  private _htmlHandling?: string; 
  public get htmlHandling() {
    return this.getStringAttribute('html_handling');
  }
  public set htmlHandling(value: string) {
    this._htmlHandling = value;
  }
  public resetHtmlHandling() {
    this._htmlHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlHandlingInput() {
    return this._htmlHandling;
  }

  // not_found_handling - computed: false, optional: true, required: false
  private _notFoundHandling?: string; 
  public get notFoundHandling() {
    return this.getStringAttribute('not_found_handling');
  }
  public set notFoundHandling(value: string) {
    this._notFoundHandling = value;
  }
  public resetNotFoundHandling() {
    this._notFoundHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notFoundHandlingInput() {
    return this._notFoundHandling;
  }

  // run_worker_first - computed: false, optional: true, required: false
  private _runWorkerFirst?: string[]; 
  public get runWorkerFirst() {
    return this.getListAttribute('run_worker_first');
  }
  public set runWorkerFirst(value: string[]) {
    this._runWorkerFirst = value;
  }
  public resetRunWorkerFirst() {
    this._runWorkerFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runWorkerFirstInput() {
    return this._runWorkerFirst;
  }
}
export interface WorkerVersionAssets {
  /**
  * Configuration for assets within a Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#config WorkerVersion#config}
  */
  readonly config?: WorkerVersionAssetsConfig;
  /**
  * Token provided upon successful upload of all files from a registered manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#jwt WorkerVersion#jwt}
  */
  readonly jwt?: string;
}

export function workerVersionAssetsToTerraform(struct?: WorkerVersionAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: workerVersionAssetsConfigToTerraform(struct!.config),
    jwt: cdktf.stringToTerraform(struct!.jwt),
  }
}


export function workerVersionAssetsToHclTerraform(struct?: WorkerVersionAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: workerVersionAssetsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerVersionAssetsConfig",
    },
    jwt: {
      value: cdktf.stringToHclTerraform(struct!.jwt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionAssetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerVersionAssets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._jwt !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionAssets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._jwt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._jwt = value.jwt;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new WorkerVersionAssetsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: WorkerVersionAssetsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // jwt - computed: false, optional: true, required: false
  private _jwt?: string; 
  public get jwt() {
    return this.getStringAttribute('jwt');
  }
  public set jwt(value: string) {
    this._jwt = value;
  }
  public resetJwt() {
    this._jwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt;
  }
}
export interface WorkerVersionBindingsOutboundWorker {
  /**
  * Environment of the outbound worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#environment WorkerVersion#environment}
  */
  readonly environment?: string;
  /**
  * Name of the outbound worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#service WorkerVersion#service}
  */
  readonly service?: string;
}

export function workerVersionBindingsOutboundWorkerToTerraform(struct?: WorkerVersionBindingsOutboundWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function workerVersionBindingsOutboundWorkerToHclTerraform(struct?: WorkerVersionBindingsOutboundWorker | cdktf.IResolvable): any {
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

export class WorkerVersionBindingsOutboundWorkerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerVersionBindingsOutboundWorker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionBindingsOutboundWorker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface WorkerVersionBindingsOutbound {
  /**
  * Pass information from the Dispatch Worker to the Outbound Worker through the parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#params WorkerVersion#params}
  */
  readonly params?: string[];
  /**
  * Outbound worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#worker WorkerVersion#worker}
  */
  readonly worker?: WorkerVersionBindingsOutboundWorker;
}

export function workerVersionBindingsOutboundToTerraform(struct?: WorkerVersionBindingsOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.params),
    worker: workerVersionBindingsOutboundWorkerToTerraform(struct!.worker),
  }
}


export function workerVersionBindingsOutboundToHclTerraform(struct?: WorkerVersionBindingsOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.params),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    worker: {
      value: workerVersionBindingsOutboundWorkerToHclTerraform(struct!.worker),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerVersionBindingsOutboundWorker",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionBindingsOutboundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerVersionBindingsOutbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._worker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionBindingsOutbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._params = undefined;
      this._worker.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._params = value.params;
      this._worker.internalValue = value.worker;
    }
  }

  // params - computed: false, optional: true, required: false
  private _params?: string[]; 
  public get params() {
    return this.getListAttribute('params');
  }
  public set params(value: string[]) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // worker - computed: false, optional: true, required: false
  private _worker = new WorkerVersionBindingsOutboundWorkerOutputReference(this, "worker");
  public get worker() {
    return this._worker;
  }
  public putWorker(value: WorkerVersionBindingsOutboundWorker) {
    this._worker.internalValue = value;
  }
  public resetWorker() {
    this._worker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker.internalValue;
  }
}
export interface WorkerVersionBindings {
  /**
  * Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#algorithm WorkerVersion#algorithm}
  */
  readonly algorithm?: string;
  /**
  * R2 bucket to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#bucket_name WorkerVersion#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Identifier of the certificate to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#certificate_id WorkerVersion#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * The exported class name of the Durable Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#class_name WorkerVersion#class_name}
  */
  readonly className?: string;
  /**
  * The name of the dataset to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#dataset WorkerVersion#dataset}
  */
  readonly dataset?: string;
  /**
  * The environment of the script_name to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#environment WorkerVersion#environment}
  */
  readonly environment?: string;
  /**
  * Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).
  * Available values: "raw", "pkcs8", "spki", "jwk".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#format WorkerVersion#format}
  */
  readonly format?: string;
  /**
  * Identifier of the D1 database to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#id WorkerVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Vectorize index to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#index_name WorkerVersion#index_name}
  */
  readonly indexName?: string;
  /**
  * JSON data to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#json WorkerVersion#json}
  */
  readonly json?: string;
  /**
  * Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#key_base64 WorkerVersion#key_base64}
  */
  readonly keyBase64?: string;
  /**
  * Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#key_jwk WorkerVersion#key_jwk}
  */
  readonly keyJwk?: string;
  /**
  * A JavaScript variable name for the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#name WorkerVersion#name}
  */
  readonly name: string;
  /**
  * Namespace to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#namespace WorkerVersion#namespace}
  */
  readonly namespace?: string;
  /**
  * Namespace identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#namespace_id WorkerVersion#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * Outbound worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#outbound WorkerVersion#outbound}
  */
  readonly outbound?: WorkerVersionBindingsOutbound;
  /**
  * Name of the Pipeline to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#pipeline WorkerVersion#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Name of the Queue to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#queue_name WorkerVersion#queue_name}
  */
  readonly queueName?: string;
  /**
  * The script where the Durable Object is defined, if it is external to this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#script_name WorkerVersion#script_name}
  */
  readonly scriptName?: string;
  /**
  * Name of the secret in the store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#secret_name WorkerVersion#secret_name}
  */
  readonly secretName?: string;
  /**
  * Name of Worker to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#service WorkerVersion#service}
  */
  readonly service?: string;
  /**
  * ID of the store containing the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#store_id WorkerVersion#store_id}
  */
  readonly storeId?: string;
  /**
  * The text value to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#text WorkerVersion#text}
  */
  readonly text?: string;
  /**
  * The kind of resource that the binding provides.
  * Available values: "ai", "analytics_engine", "assets", "browser", "d1", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "json", "kv_namespace", "mtls_certificate", "plain_text", "pipelines", "queue", "r2_bucket", "secret_text", "service", "tail_consumer", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#type WorkerVersion#type}
  */
  readonly type: string;
  /**
  * Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#usages WorkerVersion#usages}
  */
  readonly usages?: string[];
  /**
  * Name of the Workflow to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#workflow_name WorkerVersion#workflow_name}
  */
  readonly workflowName?: string;
}

export function workerVersionBindingsToTerraform(struct?: WorkerVersionBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    class_name: cdktf.stringToTerraform(struct!.className),
    dataset: cdktf.stringToTerraform(struct!.dataset),
    environment: cdktf.stringToTerraform(struct!.environment),
    format: cdktf.stringToTerraform(struct!.format),
    id: cdktf.stringToTerraform(struct!.id),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    json: cdktf.stringToTerraform(struct!.json),
    key_base64: cdktf.stringToTerraform(struct!.keyBase64),
    key_jwk: cdktf.stringToTerraform(struct!.keyJwk),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
    outbound: workerVersionBindingsOutboundToTerraform(struct!.outbound),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    script_name: cdktf.stringToTerraform(struct!.scriptName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    service: cdktf.stringToTerraform(struct!.service),
    store_id: cdktf.stringToTerraform(struct!.storeId),
    text: cdktf.stringToTerraform(struct!.text),
    type: cdktf.stringToTerraform(struct!.type),
    usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usages),
    workflow_name: cdktf.stringToTerraform(struct!.workflowName),
  }
}


export function workerVersionBindingsToHclTerraform(struct?: WorkerVersionBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktf.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_base64: {
      value: cdktf.stringToHclTerraform(struct!.keyBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_jwk: {
      value: cdktf.stringToHclTerraform(struct!.keyJwk),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    outbound: {
      value: workerVersionBindingsOutboundToHclTerraform(struct!.outbound),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerVersionBindingsOutbound",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_name: {
      value: cdktf.stringToHclTerraform(struct!.queueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_name: {
      value: cdktf.stringToHclTerraform(struct!.scriptName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
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
    store_id: {
      value: cdktf.stringToHclTerraform(struct!.storeId),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    workflow_name: {
      value: cdktf.stringToHclTerraform(struct!.workflowName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerVersionBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._keyBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyBase64 = this._keyBase64;
    }
    if (this._keyJwk !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyJwk = this._keyJwk;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    if (this._outbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound?.internalValue;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._queueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueName = this._queueName;
    }
    if (this._scriptName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptName = this._scriptName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._storeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeId = this._storeId;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usages !== undefined) {
      hasAnyValues = true;
      internalValueResult.usages = this._usages;
    }
    if (this._workflowName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowName = this._workflowName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._bucketName = undefined;
      this._certificateId = undefined;
      this._className = undefined;
      this._dataset = undefined;
      this._environment = undefined;
      this._format = undefined;
      this._id = undefined;
      this._indexName = undefined;
      this._json = undefined;
      this._keyBase64 = undefined;
      this._keyJwk = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._namespaceId = undefined;
      this._outbound.internalValue = undefined;
      this._pipeline = undefined;
      this._queueName = undefined;
      this._scriptName = undefined;
      this._secretName = undefined;
      this._service = undefined;
      this._storeId = undefined;
      this._text = undefined;
      this._type = undefined;
      this._usages = undefined;
      this._workflowName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._bucketName = value.bucketName;
      this._certificateId = value.certificateId;
      this._className = value.className;
      this._dataset = value.dataset;
      this._environment = value.environment;
      this._format = value.format;
      this._id = value.id;
      this._indexName = value.indexName;
      this._json = value.json;
      this._keyBase64 = value.keyBase64;
      this._keyJwk = value.keyJwk;
      this._name = value.name;
      this._namespace = value.namespace;
      this._namespaceId = value.namespaceId;
      this._outbound.internalValue = value.outbound;
      this._pipeline = value.pipeline;
      this._queueName = value.queueName;
      this._scriptName = value.scriptName;
      this._secretName = value.secretName;
      this._service = value.service;
      this._storeId = value.storeId;
      this._text = value.text;
      this._type = value.type;
      this._usages = value.usages;
      this._workflowName = value.workflowName;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // class_name - computed: true, optional: true, required: false
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  public resetClassName() {
    this._className = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
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

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: false, optional: true, required: false
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

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // json - computed: false, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // key_base64 - computed: false, optional: true, required: false
  private _keyBase64?: string; 
  public get keyBase64() {
    return this.getStringAttribute('key_base64');
  }
  public set keyBase64(value: string) {
    this._keyBase64 = value;
  }
  public resetKeyBase64() {
    this._keyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBase64Input() {
    return this._keyBase64;
  }

  // key_jwk - computed: false, optional: true, required: false
  private _keyJwk?: string; 
  public get keyJwk() {
    return this.getStringAttribute('key_jwk');
  }
  public set keyJwk(value: string) {
    this._keyJwk = value;
  }
  public resetKeyJwk() {
    this._keyJwk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyJwkInput() {
    return this._keyJwk;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // outbound - computed: false, optional: true, required: false
  private _outbound = new WorkerVersionBindingsOutboundOutputReference(this, "outbound");
  public get outbound() {
    return this._outbound;
  }
  public putOutbound(value: WorkerVersionBindingsOutbound) {
    this._outbound.internalValue = value;
  }
  public resetOutbound() {
    this._outbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound.internalValue;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // queue_name - computed: false, optional: true, required: false
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  public resetQueueName() {
    this._queueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // script_name - computed: true, optional: true, required: false
  private _scriptName?: string; 
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }
  public set scriptName(value: string) {
    this._scriptName = value;
  }
  public resetScriptName() {
    this._scriptName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptNameInput() {
    return this._scriptName;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // store_id - computed: false, optional: true, required: false
  private _storeId?: string; 
  public get storeId() {
    return this.getStringAttribute('store_id');
  }
  public set storeId(value: string) {
    this._storeId = value;
  }
  public resetStoreId() {
    this._storeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeIdInput() {
    return this._storeId;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // usages - computed: false, optional: true, required: false
  private _usages?: string[]; 
  public get usages() {
    return cdktf.Fn.tolist(this.getListAttribute('usages'));
  }
  public set usages(value: string[]) {
    this._usages = value;
  }
  public resetUsages() {
    this._usages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagesInput() {
    return this._usages;
  }

  // workflow_name - computed: false, optional: true, required: false
  private _workflowName?: string; 
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
  public set workflowName(value: string) {
    this._workflowName = value;
  }
  public resetWorkflowName() {
    this._workflowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowNameInput() {
    return this._workflowName;
  }
}

export class WorkerVersionBindingsList extends cdktf.ComplexList {
  public internalValue? : WorkerVersionBindings[] | cdktf.IResolvable

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
  public get(index: number): WorkerVersionBindingsOutputReference {
    return new WorkerVersionBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerVersionLimits {
  /**
  * CPU time limit in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#cpu_ms WorkerVersion#cpu_ms}
  */
  readonly cpuMs: number;
}

export function workerVersionLimitsToTerraform(struct?: WorkerVersionLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_ms: cdktf.numberToTerraform(struct!.cpuMs),
  }
}


export function workerVersionLimitsToHclTerraform(struct?: WorkerVersionLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_ms: {
      value: cdktf.numberToHclTerraform(struct!.cpuMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerVersionLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuMs = this._cpuMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuMs = value.cpuMs;
    }
  }

  // cpu_ms - computed: true, optional: false, required: true
  private _cpuMs?: number; 
  public get cpuMs() {
    return this.getNumberAttribute('cpu_ms');
  }
  public set cpuMs(value: number) {
    this._cpuMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuMsInput() {
    return this._cpuMs;
  }
}
export interface WorkerVersionMigrationsRenamedClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#from WorkerVersion#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#to WorkerVersion#to}
  */
  readonly to?: string;
}

export function workerVersionMigrationsRenamedClassesToTerraform(struct?: WorkerVersionMigrationsRenamedClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function workerVersionMigrationsRenamedClassesToHclTerraform(struct?: WorkerVersionMigrationsRenamedClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionMigrationsRenamedClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerVersionMigrationsRenamedClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionMigrationsRenamedClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class WorkerVersionMigrationsRenamedClassesList extends cdktf.ComplexList {
  public internalValue? : WorkerVersionMigrationsRenamedClasses[] | cdktf.IResolvable

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
  public get(index: number): WorkerVersionMigrationsRenamedClassesOutputReference {
    return new WorkerVersionMigrationsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerVersionMigrationsStepsRenamedClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#from WorkerVersion#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#to WorkerVersion#to}
  */
  readonly to?: string;
}

export function workerVersionMigrationsStepsRenamedClassesToTerraform(struct?: WorkerVersionMigrationsStepsRenamedClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function workerVersionMigrationsStepsRenamedClassesToHclTerraform(struct?: WorkerVersionMigrationsStepsRenamedClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionMigrationsStepsRenamedClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerVersionMigrationsStepsRenamedClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionMigrationsStepsRenamedClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class WorkerVersionMigrationsStepsRenamedClassesList extends cdktf.ComplexList {
  public internalValue? : WorkerVersionMigrationsStepsRenamedClasses[] | cdktf.IResolvable

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
  public get(index: number): WorkerVersionMigrationsStepsRenamedClassesOutputReference {
    return new WorkerVersionMigrationsStepsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerVersionMigrationsStepsTransferredClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#from WorkerVersion#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#from_script WorkerVersion#from_script}
  */
  readonly fromScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#to WorkerVersion#to}
  */
  readonly to?: string;
}

export function workerVersionMigrationsStepsTransferredClassesToTerraform(struct?: WorkerVersionMigrationsStepsTransferredClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    from_script: cdktf.stringToTerraform(struct!.fromScript),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function workerVersionMigrationsStepsTransferredClassesToHclTerraform(struct?: WorkerVersionMigrationsStepsTransferredClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_script: {
      value: cdktf.stringToHclTerraform(struct!.fromScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionMigrationsStepsTransferredClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerVersionMigrationsStepsTransferredClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._fromScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromScript = this._fromScript;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionMigrationsStepsTransferredClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._fromScript = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._fromScript = value.fromScript;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // from_script - computed: false, optional: true, required: false
  private _fromScript?: string; 
  public get fromScript() {
    return this.getStringAttribute('from_script');
  }
  public set fromScript(value: string) {
    this._fromScript = value;
  }
  public resetFromScript() {
    this._fromScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromScriptInput() {
    return this._fromScript;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class WorkerVersionMigrationsStepsTransferredClassesList extends cdktf.ComplexList {
  public internalValue? : WorkerVersionMigrationsStepsTransferredClasses[] | cdktf.IResolvable

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
  public get(index: number): WorkerVersionMigrationsStepsTransferredClassesOutputReference {
    return new WorkerVersionMigrationsStepsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerVersionMigrationsSteps {
  /**
  * A list of classes to delete Durable Object namespaces from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}
  */
  readonly deletedClasses?: string[];
  /**
  * A list of classes to create Durable Object namespaces from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#new_classes WorkerVersion#new_classes}
  */
  readonly newClasses?: string[];
  /**
  * A list of classes to create Durable Object namespaces with SQLite from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}
  */
  readonly newSqliteClasses?: string[];
  /**
  * A list of classes with Durable Object namespaces that were renamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}
  */
  readonly renamedClasses?: WorkerVersionMigrationsStepsRenamedClasses[] | cdktf.IResolvable;
  /**
  * A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}
  */
  readonly transferredClasses?: WorkerVersionMigrationsStepsTransferredClasses[] | cdktf.IResolvable;
}

export function workerVersionMigrationsStepsToTerraform(struct?: WorkerVersionMigrationsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deleted_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deletedClasses),
    new_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.newClasses),
    new_sqlite_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.newSqliteClasses),
    renamed_classes: cdktf.listMapper(workerVersionMigrationsStepsRenamedClassesToTerraform, false)(struct!.renamedClasses),
    transferred_classes: cdktf.listMapper(workerVersionMigrationsStepsTransferredClassesToTerraform, false)(struct!.transferredClasses),
  }
}


export function workerVersionMigrationsStepsToHclTerraform(struct?: WorkerVersionMigrationsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deleted_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deletedClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    new_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.newClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    new_sqlite_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.newSqliteClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    renamed_classes: {
      value: cdktf.listMapperHcl(workerVersionMigrationsStepsRenamedClassesToHclTerraform, false)(struct!.renamedClasses),
      isBlock: true,
      type: "list",
      storageClassType: "WorkerVersionMigrationsStepsRenamedClassesList",
    },
    transferred_classes: {
      value: cdktf.listMapperHcl(workerVersionMigrationsStepsTransferredClassesToHclTerraform, false)(struct!.transferredClasses),
      isBlock: true,
      type: "list",
      storageClassType: "WorkerVersionMigrationsStepsTransferredClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionMigrationsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerVersionMigrationsSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletedClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletedClasses = this._deletedClasses;
    }
    if (this._newClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.newClasses = this._newClasses;
    }
    if (this._newSqliteClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSqliteClasses = this._newSqliteClasses;
    }
    if (this._renamedClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renamedClasses = this._renamedClasses?.internalValue;
    }
    if (this._transferredClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferredClasses = this._transferredClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionMigrationsSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletedClasses = undefined;
      this._newClasses = undefined;
      this._newSqliteClasses = undefined;
      this._renamedClasses.internalValue = undefined;
      this._transferredClasses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletedClasses = value.deletedClasses;
      this._newClasses = value.newClasses;
      this._newSqliteClasses = value.newSqliteClasses;
      this._renamedClasses.internalValue = value.renamedClasses;
      this._transferredClasses.internalValue = value.transferredClasses;
    }
  }

  // deleted_classes - computed: false, optional: true, required: false
  private _deletedClasses?: string[]; 
  public get deletedClasses() {
    return this.getListAttribute('deleted_classes');
  }
  public set deletedClasses(value: string[]) {
    this._deletedClasses = value;
  }
  public resetDeletedClasses() {
    this._deletedClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedClassesInput() {
    return this._deletedClasses;
  }

  // new_classes - computed: false, optional: true, required: false
  private _newClasses?: string[]; 
  public get newClasses() {
    return this.getListAttribute('new_classes');
  }
  public set newClasses(value: string[]) {
    this._newClasses = value;
  }
  public resetNewClasses() {
    this._newClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newClassesInput() {
    return this._newClasses;
  }

  // new_sqlite_classes - computed: false, optional: true, required: false
  private _newSqliteClasses?: string[]; 
  public get newSqliteClasses() {
    return this.getListAttribute('new_sqlite_classes');
  }
  public set newSqliteClasses(value: string[]) {
    this._newSqliteClasses = value;
  }
  public resetNewSqliteClasses() {
    this._newSqliteClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSqliteClassesInput() {
    return this._newSqliteClasses;
  }

  // renamed_classes - computed: false, optional: true, required: false
  private _renamedClasses = new WorkerVersionMigrationsStepsRenamedClassesList(this, "renamed_classes", false);
  public get renamedClasses() {
    return this._renamedClasses;
  }
  public putRenamedClasses(value: WorkerVersionMigrationsStepsRenamedClasses[] | cdktf.IResolvable) {
    this._renamedClasses.internalValue = value;
  }
  public resetRenamedClasses() {
    this._renamedClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renamedClassesInput() {
    return this._renamedClasses.internalValue;
  }

  // transferred_classes - computed: false, optional: true, required: false
  private _transferredClasses = new WorkerVersionMigrationsStepsTransferredClassesList(this, "transferred_classes", false);
  public get transferredClasses() {
    return this._transferredClasses;
  }
  public putTransferredClasses(value: WorkerVersionMigrationsStepsTransferredClasses[] | cdktf.IResolvable) {
    this._transferredClasses.internalValue = value;
  }
  public resetTransferredClasses() {
    this._transferredClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferredClassesInput() {
    return this._transferredClasses.internalValue;
  }
}

export class WorkerVersionMigrationsStepsList extends cdktf.ComplexList {
  public internalValue? : WorkerVersionMigrationsSteps[] | cdktf.IResolvable

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
  public get(index: number): WorkerVersionMigrationsStepsOutputReference {
    return new WorkerVersionMigrationsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerVersionMigrationsTransferredClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#from WorkerVersion#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#from_script WorkerVersion#from_script}
  */
  readonly fromScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#to WorkerVersion#to}
  */
  readonly to?: string;
}

export function workerVersionMigrationsTransferredClassesToTerraform(struct?: WorkerVersionMigrationsTransferredClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    from_script: cdktf.stringToTerraform(struct!.fromScript),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function workerVersionMigrationsTransferredClassesToHclTerraform(struct?: WorkerVersionMigrationsTransferredClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_script: {
      value: cdktf.stringToHclTerraform(struct!.fromScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionMigrationsTransferredClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerVersionMigrationsTransferredClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._fromScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromScript = this._fromScript;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionMigrationsTransferredClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._fromScript = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._fromScript = value.fromScript;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // from_script - computed: false, optional: true, required: false
  private _fromScript?: string; 
  public get fromScript() {
    return this.getStringAttribute('from_script');
  }
  public set fromScript(value: string) {
    this._fromScript = value;
  }
  public resetFromScript() {
    this._fromScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromScriptInput() {
    return this._fromScript;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class WorkerVersionMigrationsTransferredClassesList extends cdktf.ComplexList {
  public internalValue? : WorkerVersionMigrationsTransferredClasses[] | cdktf.IResolvable

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
  public get(index: number): WorkerVersionMigrationsTransferredClassesOutputReference {
    return new WorkerVersionMigrationsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerVersionMigrations {
  /**
  * A list of classes to delete Durable Object namespaces from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}
  */
  readonly deletedClasses?: string[];
  /**
  * A list of classes to create Durable Object namespaces from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#new_classes WorkerVersion#new_classes}
  */
  readonly newClasses?: string[];
  /**
  * A list of classes to create Durable Object namespaces with SQLite from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}
  */
  readonly newSqliteClasses?: string[];
  /**
  * Tag to set as the latest migration tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#new_tag WorkerVersion#new_tag}
  */
  readonly newTag?: string;
  /**
  * Tag used to verify against the latest migration tag for this Worker. If they don't match, the upload is rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#old_tag WorkerVersion#old_tag}
  */
  readonly oldTag?: string;
  /**
  * A list of classes with Durable Object namespaces that were renamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}
  */
  readonly renamedClasses?: WorkerVersionMigrationsRenamedClasses[] | cdktf.IResolvable;
  /**
  * Migrations to apply in order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#steps WorkerVersion#steps}
  */
  readonly steps?: WorkerVersionMigrationsSteps[] | cdktf.IResolvable;
  /**
  * A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}
  */
  readonly transferredClasses?: WorkerVersionMigrationsTransferredClasses[] | cdktf.IResolvable;
}

export function workerVersionMigrationsToTerraform(struct?: WorkerVersionMigrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deleted_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deletedClasses),
    new_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.newClasses),
    new_sqlite_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.newSqliteClasses),
    new_tag: cdktf.stringToTerraform(struct!.newTag),
    old_tag: cdktf.stringToTerraform(struct!.oldTag),
    renamed_classes: cdktf.listMapper(workerVersionMigrationsRenamedClassesToTerraform, false)(struct!.renamedClasses),
    steps: cdktf.listMapper(workerVersionMigrationsStepsToTerraform, false)(struct!.steps),
    transferred_classes: cdktf.listMapper(workerVersionMigrationsTransferredClassesToTerraform, false)(struct!.transferredClasses),
  }
}


export function workerVersionMigrationsToHclTerraform(struct?: WorkerVersionMigrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deleted_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deletedClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    new_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.newClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    new_sqlite_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.newSqliteClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    new_tag: {
      value: cdktf.stringToHclTerraform(struct!.newTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_tag: {
      value: cdktf.stringToHclTerraform(struct!.oldTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renamed_classes: {
      value: cdktf.listMapperHcl(workerVersionMigrationsRenamedClassesToHclTerraform, false)(struct!.renamedClasses),
      isBlock: true,
      type: "list",
      storageClassType: "WorkerVersionMigrationsRenamedClassesList",
    },
    steps: {
      value: cdktf.listMapperHcl(workerVersionMigrationsStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "WorkerVersionMigrationsStepsList",
    },
    transferred_classes: {
      value: cdktf.listMapperHcl(workerVersionMigrationsTransferredClassesToHclTerraform, false)(struct!.transferredClasses),
      isBlock: true,
      type: "list",
      storageClassType: "WorkerVersionMigrationsTransferredClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerVersionMigrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerVersionMigrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletedClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletedClasses = this._deletedClasses;
    }
    if (this._newClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.newClasses = this._newClasses;
    }
    if (this._newSqliteClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSqliteClasses = this._newSqliteClasses;
    }
    if (this._newTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTag = this._newTag;
    }
    if (this._oldTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldTag = this._oldTag;
    }
    if (this._renamedClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renamedClasses = this._renamedClasses?.internalValue;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    if (this._transferredClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferredClasses = this._transferredClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionMigrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletedClasses = undefined;
      this._newClasses = undefined;
      this._newSqliteClasses = undefined;
      this._newTag = undefined;
      this._oldTag = undefined;
      this._renamedClasses.internalValue = undefined;
      this._steps.internalValue = undefined;
      this._transferredClasses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletedClasses = value.deletedClasses;
      this._newClasses = value.newClasses;
      this._newSqliteClasses = value.newSqliteClasses;
      this._newTag = value.newTag;
      this._oldTag = value.oldTag;
      this._renamedClasses.internalValue = value.renamedClasses;
      this._steps.internalValue = value.steps;
      this._transferredClasses.internalValue = value.transferredClasses;
    }
  }

  // deleted_classes - computed: false, optional: true, required: false
  private _deletedClasses?: string[]; 
  public get deletedClasses() {
    return this.getListAttribute('deleted_classes');
  }
  public set deletedClasses(value: string[]) {
    this._deletedClasses = value;
  }
  public resetDeletedClasses() {
    this._deletedClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedClassesInput() {
    return this._deletedClasses;
  }

  // new_classes - computed: false, optional: true, required: false
  private _newClasses?: string[]; 
  public get newClasses() {
    return this.getListAttribute('new_classes');
  }
  public set newClasses(value: string[]) {
    this._newClasses = value;
  }
  public resetNewClasses() {
    this._newClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newClassesInput() {
    return this._newClasses;
  }

  // new_sqlite_classes - computed: false, optional: true, required: false
  private _newSqliteClasses?: string[]; 
  public get newSqliteClasses() {
    return this.getListAttribute('new_sqlite_classes');
  }
  public set newSqliteClasses(value: string[]) {
    this._newSqliteClasses = value;
  }
  public resetNewSqliteClasses() {
    this._newSqliteClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSqliteClassesInput() {
    return this._newSqliteClasses;
  }

  // new_tag - computed: false, optional: true, required: false
  private _newTag?: string; 
  public get newTag() {
    return this.getStringAttribute('new_tag');
  }
  public set newTag(value: string) {
    this._newTag = value;
  }
  public resetNewTag() {
    this._newTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTagInput() {
    return this._newTag;
  }

  // old_tag - computed: false, optional: true, required: false
  private _oldTag?: string; 
  public get oldTag() {
    return this.getStringAttribute('old_tag');
  }
  public set oldTag(value: string) {
    this._oldTag = value;
  }
  public resetOldTag() {
    this._oldTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldTagInput() {
    return this._oldTag;
  }

  // renamed_classes - computed: false, optional: true, required: false
  private _renamedClasses = new WorkerVersionMigrationsRenamedClassesList(this, "renamed_classes", false);
  public get renamedClasses() {
    return this._renamedClasses;
  }
  public putRenamedClasses(value: WorkerVersionMigrationsRenamedClasses[] | cdktf.IResolvable) {
    this._renamedClasses.internalValue = value;
  }
  public resetRenamedClasses() {
    this._renamedClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renamedClassesInput() {
    return this._renamedClasses.internalValue;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new WorkerVersionMigrationsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: WorkerVersionMigrationsSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // transferred_classes - computed: false, optional: true, required: false
  private _transferredClasses = new WorkerVersionMigrationsTransferredClassesList(this, "transferred_classes", false);
  public get transferredClasses() {
    return this._transferredClasses;
  }
  public putTransferredClasses(value: WorkerVersionMigrationsTransferredClasses[] | cdktf.IResolvable) {
    this._transferredClasses.internalValue = value;
  }
  public resetTransferredClasses() {
    this._transferredClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferredClassesInput() {
    return this._transferredClasses.internalValue;
  }
}
export interface WorkerVersionModules {
  /**
  * The file path of the module content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#content_file WorkerVersion#content_file}
  */
  readonly contentFile: string;
  /**
  * The content type of the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#content_type WorkerVersion#content_type}
  */
  readonly contentType: string;
  /**
  * The name of the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#name WorkerVersion#name}
  */
  readonly name: string;
}

export function workerVersionModulesToTerraform(struct?: WorkerVersionModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_file: cdktf.stringToTerraform(struct!.contentFile),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workerVersionModulesToHclTerraform(struct?: WorkerVersionModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_file: {
      value: cdktf.stringToHclTerraform(struct!.contentFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
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

export class WorkerVersionModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerVersionModules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFile = this._contentFile;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerVersionModules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentFile = undefined;
      this._contentType = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentFile = value.contentFile;
      this._contentType = value.contentType;
      this._name = value.name;
    }
  }

  // content_file - computed: false, optional: false, required: true
  private _contentFile?: string; 
  public get contentFile() {
    return this.getStringAttribute('content_file');
  }
  public set contentFile(value: string) {
    this._contentFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFileInput() {
    return this._contentFile;
  }

  // content_sha256 - computed: true, optional: false, required: false
  public get contentSha256() {
    return this.getStringAttribute('content_sha256');
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
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

export class WorkerVersionModulesList extends cdktf.ComplexList {
  public internalValue? : WorkerVersionModules[] | cdktf.IResolvable

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
  public get(index: number): WorkerVersionModulesOutputReference {
    return new WorkerVersionModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerVersionPlacement {
  /**
  * Placement mode for the version.
  * Available values: "smart".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#mode WorkerVersion#mode}
  */
  readonly mode?: string;
}

export function workerVersionPlacementToTerraform(struct?: WorkerVersionPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function workerVersionPlacementToHclTerraform(struct?: WorkerVersionPlacement | cdktf.IResolvable): any {
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

export class WorkerVersionPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerVersionPlacement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkerVersionPlacement | cdktf.IResolvable | undefined) {
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version cloudflare_worker_version}
*/
export class WorkerVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_worker_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkerVersion to import
  * @param importFromId The id of the existing WorkerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkerVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/worker_version cloudflare_worker_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkerVersionConfig
  */
  public constructor(scope: Construct, id: string, config: WorkerVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_worker_version',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.10.1',
        providerVersionConstraint: '~> 5.0'
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
    this._annotations.internalValue = config.annotations;
    this._assets.internalValue = config.assets;
    this._bindings.internalValue = config.bindings;
    this._compatibilityDate = config.compatibilityDate;
    this._compatibilityFlags = config.compatibilityFlags;
    this._limits.internalValue = config.limits;
    this._mainModule = config.mainModule;
    this._migrations.internalValue = config.migrations;
    this._modules.internalValue = config.modules;
    this._placement.internalValue = config.placement;
    this._usageModel = config.usageModel;
    this._workerId = config.workerId;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new WorkerVersionAnnotationsOutputReference(this, "annotations");
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: WorkerVersionAnnotations) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // assets - computed: false, optional: true, required: false
  private _assets = new WorkerVersionAssetsOutputReference(this, "assets");
  public get assets() {
    return this._assets;
  }
  public putAssets(value: WorkerVersionAssets) {
    this._assets.internalValue = value;
  }
  public resetAssets() {
    this._assets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsInput() {
    return this._assets.internalValue;
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new WorkerVersionBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: WorkerVersionBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
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

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // limits - computed: true, optional: true, required: false
  private _limits = new WorkerVersionLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: WorkerVersionLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // main_module - computed: false, optional: true, required: false
  private _mainModule?: string; 
  public get mainModule() {
    return this.getStringAttribute('main_module');
  }
  public set mainModule(value: string) {
    this._mainModule = value;
  }
  public resetMainModule() {
    this._mainModule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainModuleInput() {
    return this._mainModule;
  }

  // migrations - computed: false, optional: true, required: false
  private _migrations = new WorkerVersionMigrationsOutputReference(this, "migrations");
  public get migrations() {
    return this._migrations;
  }
  public putMigrations(value: WorkerVersionMigrations) {
    this._migrations.internalValue = value;
  }
  public resetMigrations() {
    this._migrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationsInput() {
    return this._migrations.internalValue;
  }

  // modules - computed: false, optional: true, required: false
  private _modules = new WorkerVersionModulesList(this, "modules", true);
  public get modules() {
    return this._modules;
  }
  public putModules(value: WorkerVersionModules[] | cdktf.IResolvable) {
    this._modules.internalValue = value;
  }
  public resetModules() {
    this._modules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesInput() {
    return this._modules.internalValue;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new WorkerVersionPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: WorkerVersionPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // usage_model - computed: true, optional: true, required: false
  private _usageModel?: string; 
  public get usageModel() {
    return this.getStringAttribute('usage_model');
  }
  public set usageModel(value: string) {
    this._usageModel = value;
  }
  public resetUsageModel() {
    this._usageModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageModelInput() {
    return this._usageModel;
  }

  // worker_id - computed: false, optional: false, required: true
  private _workerId?: string; 
  public get workerId() {
    return this.getStringAttribute('worker_id');
  }
  public set workerId(value: string) {
    this._workerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerIdInput() {
    return this._workerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      annotations: workerVersionAnnotationsToTerraform(this._annotations.internalValue),
      assets: workerVersionAssetsToTerraform(this._assets.internalValue),
      bindings: cdktf.listMapper(workerVersionBindingsToTerraform, false)(this._bindings.internalValue),
      compatibility_date: cdktf.stringToTerraform(this._compatibilityDate),
      compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibilityFlags),
      limits: workerVersionLimitsToTerraform(this._limits.internalValue),
      main_module: cdktf.stringToTerraform(this._mainModule),
      migrations: workerVersionMigrationsToTerraform(this._migrations.internalValue),
      modules: cdktf.listMapper(workerVersionModulesToTerraform, false)(this._modules.internalValue),
      placement: workerVersionPlacementToTerraform(this._placement.internalValue),
      usage_model: cdktf.stringToTerraform(this._usageModel),
      worker_id: cdktf.stringToTerraform(this._workerId),
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
      annotations: {
        value: workerVersionAnnotationsToHclTerraform(this._annotations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkerVersionAnnotations",
      },
      assets: {
        value: workerVersionAssetsToHclTerraform(this._assets.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkerVersionAssets",
      },
      bindings: {
        value: cdktf.listMapperHcl(workerVersionBindingsToHclTerraform, false)(this._bindings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkerVersionBindingsList",
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
      limits: {
        value: workerVersionLimitsToHclTerraform(this._limits.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkerVersionLimits",
      },
      main_module: {
        value: cdktf.stringToHclTerraform(this._mainModule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migrations: {
        value: workerVersionMigrationsToHclTerraform(this._migrations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkerVersionMigrations",
      },
      modules: {
        value: cdktf.listMapperHcl(workerVersionModulesToHclTerraform, false)(this._modules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerVersionModulesList",
      },
      placement: {
        value: workerVersionPlacementToHclTerraform(this._placement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkerVersionPlacement",
      },
      usage_model: {
        value: cdktf.stringToHclTerraform(this._usageModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_id: {
        value: cdktf.stringToHclTerraform(this._workerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
