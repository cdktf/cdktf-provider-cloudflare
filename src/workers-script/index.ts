/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkersScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#account_id WorkersScript#account_id}
  */
  readonly accountId: string;
  /**
  * Configuration for assets within a Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#assets WorkersScript#assets}
  */
  readonly assets?: WorkersScriptAssets;
  /**
  * List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#bindings WorkersScript#bindings}
  */
  readonly bindings?: WorkersScriptBindings[] | cdktf.IResolvable;
  /**
  * Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#body_part WorkersScript#body_part}
  */
  readonly bodyPart?: string;
  /**
  * Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#compatibility_date WorkersScript#compatibility_date}
  */
  readonly compatibilityDate?: string;
  /**
  * Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#compatibility_flags WorkersScript#compatibility_flags}
  */
  readonly compatibilityFlags?: string[];
  /**
  * Module or Service Worker contents of the Worker. Conflicts with `content_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#content WorkersScript#content}
  */
  readonly content?: string;
  /**
  * Path to a file containing the Module or Service Worker contents of the Worker. Conflicts with `content`. Must be paired with `content_sha256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#content_file WorkersScript#content_file}
  */
  readonly contentFile?: string;
  /**
  * SHA-256 hash of the Worker contents. Used to trigger updates when source code changes. Must be provided when `content_file` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#content_sha256 WorkersScript#content_sha256}
  */
  readonly contentSha256?: string;
  /**
  * Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#content_type WorkersScript#content_type}
  */
  readonly contentType?: string;
  /**
  * Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#keep_assets WorkersScript#keep_assets}
  */
  readonly keepAssets?: boolean | cdktf.IResolvable;
  /**
  * List of binding types to keep from previous_upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#keep_bindings WorkersScript#keep_bindings}
  */
  readonly keepBindings?: string[];
  /**
  * Limits to apply for this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#limits WorkersScript#limits}
  */
  readonly limits?: WorkersScriptLimits;
  /**
  * Whether Logpush is turned on for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#logpush WorkersScript#logpush}
  */
  readonly logpush?: boolean | cdktf.IResolvable;
  /**
  * Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#main_module WorkersScript#main_module}
  */
  readonly mainModule?: string;
  /**
  * Migrations to apply for Durable Objects associated with this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#migrations WorkersScript#migrations}
  */
  readonly migrations?: WorkersScriptMigrations;
  /**
  * Observability settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#observability WorkersScript#observability}
  */
  readonly observability?: WorkersScriptObservability;
  /**
  * Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#placement WorkersScript#placement}
  */
  readonly placement?: WorkersScriptPlacement;
  /**
  * Name of the script, used in URLs and route configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#script_name WorkersScript#script_name}
  */
  readonly scriptName: string;
  /**
  * List of Workers that will consume logs from the attached Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#tail_consumers WorkersScript#tail_consumers}
  */
  readonly tailConsumers?: WorkersScriptTailConsumers[] | cdktf.IResolvable;
  /**
  * Usage model for the Worker invocations.
  * Available values: "standard", "bundled", "unbound".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#usage_model WorkersScript#usage_model}
  */
  readonly usageModel?: string;
}
export interface WorkersScriptAssetsConfig {
  /**
  * The contents of a _headers file (used to attach custom headers on asset responses).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#headers WorkersScript#headers}
  */
  readonly headers?: string;
  /**
  * Determines the redirects and rewrites of requests for HTML content.
  * Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#html_handling WorkersScript#html_handling}
  */
  readonly htmlHandling?: string;
  /**
  * Determines the response when a request does not match a static asset, and there is no Worker script.
  * Available values: "none", "404-page", "single-page-application".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#not_found_handling WorkersScript#not_found_handling}
  */
  readonly notFoundHandling?: string;
  /**
  * The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#redirects WorkersScript#redirects}
  */
  readonly redirects?: string;
  /**
  * When true, requests will always invoke the Worker script. Otherwise, attempt to serve an asset matching the request, falling back to the Worker script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#run_worker_first WorkersScript#run_worker_first}
  */
  readonly runWorkerFirst?: boolean | cdktf.IResolvable;
  /**
  * When true and the incoming request matches an asset, that will be served instead of invoking the Worker script. When false, requests will always invoke the Worker script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#serve_directly WorkersScript#serve_directly}
  */
  readonly serveDirectly?: boolean | cdktf.IResolvable;
}

export function workersScriptAssetsConfigToTerraform(struct?: WorkersScriptAssetsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.stringToTerraform(struct!.headers),
    html_handling: cdktf.stringToTerraform(struct!.htmlHandling),
    not_found_handling: cdktf.stringToTerraform(struct!.notFoundHandling),
    redirects: cdktf.stringToTerraform(struct!.redirects),
    run_worker_first: cdktf.booleanToTerraform(struct!.runWorkerFirst),
    serve_directly: cdktf.booleanToTerraform(struct!.serveDirectly),
  }
}


export function workersScriptAssetsConfigToHclTerraform(struct?: WorkersScriptAssetsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.stringToHclTerraform(struct!.headers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    redirects: {
      value: cdktf.stringToHclTerraform(struct!.redirects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_worker_first: {
      value: cdktf.booleanToHclTerraform(struct!.runWorkerFirst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serve_directly: {
      value: cdktf.booleanToHclTerraform(struct!.serveDirectly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersScriptAssetsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkersScriptAssetsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._htmlHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlHandling = this._htmlHandling;
    }
    if (this._notFoundHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.notFoundHandling = this._notFoundHandling;
    }
    if (this._redirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirects = this._redirects;
    }
    if (this._runWorkerFirst !== undefined) {
      hasAnyValues = true;
      internalValueResult.runWorkerFirst = this._runWorkerFirst;
    }
    if (this._serveDirectly !== undefined) {
      hasAnyValues = true;
      internalValueResult.serveDirectly = this._serveDirectly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersScriptAssetsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._htmlHandling = undefined;
      this._notFoundHandling = undefined;
      this._redirects = undefined;
      this._runWorkerFirst = undefined;
      this._serveDirectly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._htmlHandling = value.htmlHandling;
      this._notFoundHandling = value.notFoundHandling;
      this._redirects = value.redirects;
      this._runWorkerFirst = value.runWorkerFirst;
      this._serveDirectly = value.serveDirectly;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // redirects - computed: false, optional: true, required: false
  private _redirects?: string; 
  public get redirects() {
    return this.getStringAttribute('redirects');
  }
  public set redirects(value: string) {
    this._redirects = value;
  }
  public resetRedirects() {
    this._redirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectsInput() {
    return this._redirects;
  }

  // run_worker_first - computed: true, optional: true, required: false
  private _runWorkerFirst?: boolean | cdktf.IResolvable; 
  public get runWorkerFirst() {
    return this.getBooleanAttribute('run_worker_first');
  }
  public set runWorkerFirst(value: boolean | cdktf.IResolvable) {
    this._runWorkerFirst = value;
  }
  public resetRunWorkerFirst() {
    this._runWorkerFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runWorkerFirstInput() {
    return this._runWorkerFirst;
  }

  // serve_directly - computed: false, optional: true, required: false
  private _serveDirectly?: boolean | cdktf.IResolvable; 
  public get serveDirectly() {
    return this.getBooleanAttribute('serve_directly');
  }
  public set serveDirectly(value: boolean | cdktf.IResolvable) {
    this._serveDirectly = value;
  }
  public resetServeDirectly() {
    this._serveDirectly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveDirectlyInput() {
    return this._serveDirectly;
  }
}
export interface WorkersScriptAssets {
  /**
  * Configuration for assets within a Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#config WorkersScript#config}
  */
  readonly config?: WorkersScriptAssetsConfig;
  /**
  * Path to the directory containing asset files to upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#directory WorkersScript#directory}
  */
  readonly directory?: string;
  /**
  * Token provided upon successful upload of all files from a registered manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#jwt WorkersScript#jwt}
  */
  readonly jwt?: string;
}

export function workersScriptAssetsToTerraform(struct?: WorkersScriptAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: workersScriptAssetsConfigToTerraform(struct!.config),
    directory: cdktf.stringToTerraform(struct!.directory),
    jwt: cdktf.stringToTerraform(struct!.jwt),
  }
}


export function workersScriptAssetsToHclTerraform(struct?: WorkersScriptAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: workersScriptAssetsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkersScriptAssetsConfig",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class WorkersScriptAssetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkersScriptAssets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._jwt !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersScriptAssets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._directory = undefined;
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
      this._directory = value.directory;
      this._jwt = value.jwt;
    }
  }

  // asset_manifest_sha256 - computed: true, optional: false, required: false
  public get assetManifestSha256() {
    return this.getStringAttribute('asset_manifest_sha256');
  }

  // config - computed: false, optional: true, required: false
  private _config = new WorkersScriptAssetsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: WorkersScriptAssetsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
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
export interface WorkersScriptBindingsOutboundWorker {
  /**
  * Environment of the outbound worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#environment WorkersScript#environment}
  */
  readonly environment?: string;
  /**
  * Name of the outbound worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#service WorkersScript#service}
  */
  readonly service?: string;
}

export function workersScriptBindingsOutboundWorkerToTerraform(struct?: WorkersScriptBindingsOutboundWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function workersScriptBindingsOutboundWorkerToHclTerraform(struct?: WorkersScriptBindingsOutboundWorker | cdktf.IResolvable): any {
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

export class WorkersScriptBindingsOutboundWorkerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkersScriptBindingsOutboundWorker | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkersScriptBindingsOutboundWorker | cdktf.IResolvable | undefined) {
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

  // environment - computed: true, optional: true, required: false
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

  // service - computed: true, optional: true, required: false
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
export interface WorkersScriptBindingsOutbound {
  /**
  * Pass information from the Dispatch Worker to the Outbound Worker through the parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#params WorkersScript#params}
  */
  readonly params?: string[];
  /**
  * Outbound worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#worker WorkersScript#worker}
  */
  readonly worker?: WorkersScriptBindingsOutboundWorker;
}

export function workersScriptBindingsOutboundToTerraform(struct?: WorkersScriptBindingsOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.params),
    worker: workersScriptBindingsOutboundWorkerToTerraform(struct!.worker),
  }
}


export function workersScriptBindingsOutboundToHclTerraform(struct?: WorkersScriptBindingsOutbound | cdktf.IResolvable): any {
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
      value: workersScriptBindingsOutboundWorkerToHclTerraform(struct!.worker),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkersScriptBindingsOutboundWorker",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersScriptBindingsOutboundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkersScriptBindingsOutbound | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkersScriptBindingsOutbound | cdktf.IResolvable | undefined) {
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

  // params - computed: true, optional: true, required: false
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

  // worker - computed: true, optional: true, required: false
  private _worker = new WorkersScriptBindingsOutboundWorkerOutputReference(this, "worker");
  public get worker() {
    return this._worker;
  }
  public putWorker(value: WorkersScriptBindingsOutboundWorker) {
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
export interface WorkersScriptBindings {
  /**
  * Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#algorithm WorkersScript#algorithm}
  */
  readonly algorithm?: string;
  /**
  * List of allowed destination addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#allowed_destination_addresses WorkersScript#allowed_destination_addresses}
  */
  readonly allowedDestinationAddresses?: string[];
  /**
  * List of allowed sender addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#allowed_sender_addresses WorkersScript#allowed_sender_addresses}
  */
  readonly allowedSenderAddresses?: string[];
  /**
  * R2 bucket to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#bucket_name WorkersScript#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Identifier of the certificate to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#certificate_id WorkersScript#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * The exported class name of the Durable Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#class_name WorkersScript#class_name}
  */
  readonly className?: string;
  /**
  * The name of the dataset to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#dataset WorkersScript#dataset}
  */
  readonly dataset?: string;
  /**
  * Destination address for the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#destination_address WorkersScript#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * The environment of the script_name to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#environment WorkersScript#environment}
  */
  readonly environment?: string;
  /**
  * Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).
  * Available values: "raw", "pkcs8", "spki", "jwk".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#format WorkersScript#format}
  */
  readonly format?: string;
  /**
  * Identifier of the D1 database to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#id WorkersScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Vectorize index to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#index_name WorkersScript#index_name}
  */
  readonly indexName?: string;
  /**
  * JSON data to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#json WorkersScript#json}
  */
  readonly json?: string;
  /**
  * The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket.
  * Available values: "eu", "fedramp".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#jurisdiction WorkersScript#jurisdiction}
  */
  readonly jurisdiction?: string;
  /**
  * Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#key_base64 WorkersScript#key_base64}
  */
  readonly keyBase64?: string;
  /**
  * Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#key_jwk WorkersScript#key_jwk}
  */
  readonly keyJwk?: string;
  /**
  * A JavaScript variable name for the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#name WorkersScript#name}
  */
  readonly name: string;
  /**
  * Namespace to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#namespace WorkersScript#namespace}
  */
  readonly namespace?: string;
  /**
  * Namespace identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#namespace_id WorkersScript#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * The old name of the inherited binding. If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#old_name WorkersScript#old_name}
  */
  readonly oldName?: string;
  /**
  * Outbound worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#outbound WorkersScript#outbound}
  */
  readonly outbound?: WorkersScriptBindingsOutbound;
  /**
  * The name of the file containing the data content. Only accepted for `service worker syntax` Workers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#part WorkersScript#part}
  */
  readonly part?: string;
  /**
  * Name of the Pipeline to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#pipeline WorkersScript#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Name of the Queue to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#queue_name WorkersScript#queue_name}
  */
  readonly queueName?: string;
  /**
  * The script where the Durable Object is defined, if it is external to this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#script_name WorkersScript#script_name}
  */
  readonly scriptName?: string;
  /**
  * Name of the secret in the store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#secret_name WorkersScript#secret_name}
  */
  readonly secretName?: string;
  /**
  * Name of Worker to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#service WorkersScript#service}
  */
  readonly service?: string;
  /**
  * ID of the store containing the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#store_id WorkersScript#store_id}
  */
  readonly storeId?: string;
  /**
  * The text value to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#text WorkersScript#text}
  */
  readonly text?: string;
  /**
  * The kind of resource that the binding provides.
  * Available values: "ai", "analytics_engine", "assets", "browser", "d1", "data_blob", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "inherit", "images", "json", "kv_namespace", "mtls_certificate", "plain_text", "pipelines", "queue", "r2_bucket", "secret_text", "send_email", "service", "tail_consumer", "text_blob", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow", "wasm_module".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#type WorkersScript#type}
  */
  readonly type: string;
  /**
  * Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#usages WorkersScript#usages}
  */
  readonly usages?: string[];
  /**
  * Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. Defaults to inheriting the binding from the latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#version_id WorkersScript#version_id}
  */
  readonly versionId?: string;
  /**
  * Name of the Workflow to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#workflow_name WorkersScript#workflow_name}
  */
  readonly workflowName?: string;
}

export function workersScriptBindingsToTerraform(struct?: WorkersScriptBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    allowed_destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDestinationAddresses),
    allowed_sender_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedSenderAddresses),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    class_name: cdktf.stringToTerraform(struct!.className),
    dataset: cdktf.stringToTerraform(struct!.dataset),
    destination_address: cdktf.stringToTerraform(struct!.destinationAddress),
    environment: cdktf.stringToTerraform(struct!.environment),
    format: cdktf.stringToTerraform(struct!.format),
    id: cdktf.stringToTerraform(struct!.id),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    json: cdktf.stringToTerraform(struct!.json),
    jurisdiction: cdktf.stringToTerraform(struct!.jurisdiction),
    key_base64: cdktf.stringToTerraform(struct!.keyBase64),
    key_jwk: cdktf.stringToTerraform(struct!.keyJwk),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
    old_name: cdktf.stringToTerraform(struct!.oldName),
    outbound: workersScriptBindingsOutboundToTerraform(struct!.outbound),
    part: cdktf.stringToTerraform(struct!.part),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    script_name: cdktf.stringToTerraform(struct!.scriptName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    service: cdktf.stringToTerraform(struct!.service),
    store_id: cdktf.stringToTerraform(struct!.storeId),
    text: cdktf.stringToTerraform(struct!.text),
    type: cdktf.stringToTerraform(struct!.type),
    usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usages),
    version_id: cdktf.stringToTerraform(struct!.versionId),
    workflow_name: cdktf.stringToTerraform(struct!.workflowName),
  }
}


export function workersScriptBindingsToHclTerraform(struct?: WorkersScriptBindings | cdktf.IResolvable): any {
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
    allowed_destination_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedDestinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_sender_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedSenderAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    destination_address: {
      value: cdktf.stringToHclTerraform(struct!.destinationAddress),
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
    jurisdiction: {
      value: cdktf.stringToHclTerraform(struct!.jurisdiction),
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
    old_name: {
      value: cdktf.stringToHclTerraform(struct!.oldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound: {
      value: workersScriptBindingsOutboundToHclTerraform(struct!.outbound),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkersScriptBindingsOutbound",
    },
    part: {
      value: cdktf.stringToHclTerraform(struct!.part),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    version_id: {
      value: cdktf.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class WorkersScriptBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersScriptBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._allowedDestinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDestinationAddresses = this._allowedDestinationAddresses;
    }
    if (this._allowedSenderAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSenderAddresses = this._allowedSenderAddresses;
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
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
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
    if (this._jurisdiction !== undefined) {
      hasAnyValues = true;
      internalValueResult.jurisdiction = this._jurisdiction;
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
    if (this._oldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldName = this._oldName;
    }
    if (this._outbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound?.internalValue;
    }
    if (this._part !== undefined) {
      hasAnyValues = true;
      internalValueResult.part = this._part;
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
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._workflowName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowName = this._workflowName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersScriptBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._allowedDestinationAddresses = undefined;
      this._allowedSenderAddresses = undefined;
      this._bucketName = undefined;
      this._certificateId = undefined;
      this._className = undefined;
      this._dataset = undefined;
      this._destinationAddress = undefined;
      this._environment = undefined;
      this._format = undefined;
      this._id = undefined;
      this._indexName = undefined;
      this._json = undefined;
      this._jurisdiction = undefined;
      this._keyBase64 = undefined;
      this._keyJwk = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._namespaceId = undefined;
      this._oldName = undefined;
      this._outbound.internalValue = undefined;
      this._part = undefined;
      this._pipeline = undefined;
      this._queueName = undefined;
      this._scriptName = undefined;
      this._secretName = undefined;
      this._service = undefined;
      this._storeId = undefined;
      this._text = undefined;
      this._type = undefined;
      this._usages = undefined;
      this._versionId = undefined;
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
      this._allowedDestinationAddresses = value.allowedDestinationAddresses;
      this._allowedSenderAddresses = value.allowedSenderAddresses;
      this._bucketName = value.bucketName;
      this._certificateId = value.certificateId;
      this._className = value.className;
      this._dataset = value.dataset;
      this._destinationAddress = value.destinationAddress;
      this._environment = value.environment;
      this._format = value.format;
      this._id = value.id;
      this._indexName = value.indexName;
      this._json = value.json;
      this._jurisdiction = value.jurisdiction;
      this._keyBase64 = value.keyBase64;
      this._keyJwk = value.keyJwk;
      this._name = value.name;
      this._namespace = value.namespace;
      this._namespaceId = value.namespaceId;
      this._oldName = value.oldName;
      this._outbound.internalValue = value.outbound;
      this._part = value.part;
      this._pipeline = value.pipeline;
      this._queueName = value.queueName;
      this._scriptName = value.scriptName;
      this._secretName = value.secretName;
      this._service = value.service;
      this._storeId = value.storeId;
      this._text = value.text;
      this._type = value.type;
      this._usages = value.usages;
      this._versionId = value.versionId;
      this._workflowName = value.workflowName;
    }
  }

  // algorithm - computed: true, optional: true, required: false
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

  // allowed_destination_addresses - computed: true, optional: true, required: false
  private _allowedDestinationAddresses?: string[]; 
  public get allowedDestinationAddresses() {
    return this.getListAttribute('allowed_destination_addresses');
  }
  public set allowedDestinationAddresses(value: string[]) {
    this._allowedDestinationAddresses = value;
  }
  public resetAllowedDestinationAddresses() {
    this._allowedDestinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDestinationAddressesInput() {
    return this._allowedDestinationAddresses;
  }

  // allowed_sender_addresses - computed: true, optional: true, required: false
  private _allowedSenderAddresses?: string[]; 
  public get allowedSenderAddresses() {
    return this.getListAttribute('allowed_sender_addresses');
  }
  public set allowedSenderAddresses(value: string[]) {
    this._allowedSenderAddresses = value;
  }
  public resetAllowedSenderAddresses() {
    this._allowedSenderAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSenderAddressesInput() {
    return this._allowedSenderAddresses;
  }

  // bucket_name - computed: true, optional: true, required: false
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

  // certificate_id - computed: true, optional: true, required: false
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

  // dataset - computed: true, optional: true, required: false
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

  // destination_address - computed: true, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // environment - computed: true, optional: true, required: false
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

  // format - computed: true, optional: true, required: false
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

  // index_name - computed: true, optional: true, required: false
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

  // json - computed: true, optional: true, required: false
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

  // jurisdiction - computed: true, optional: true, required: false
  private _jurisdiction?: string; 
  public get jurisdiction() {
    return this.getStringAttribute('jurisdiction');
  }
  public set jurisdiction(value: string) {
    this._jurisdiction = value;
  }
  public resetJurisdiction() {
    this._jurisdiction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jurisdictionInput() {
    return this._jurisdiction;
  }

  // key_base64 - computed: true, optional: true, required: false
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

  // key_jwk - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

  // namespace - computed: true, optional: true, required: false
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

  // old_name - computed: true, optional: true, required: false
  private _oldName?: string; 
  public get oldName() {
    return this.getStringAttribute('old_name');
  }
  public set oldName(value: string) {
    this._oldName = value;
  }
  public resetOldName() {
    this._oldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldNameInput() {
    return this._oldName;
  }

  // outbound - computed: true, optional: true, required: false
  private _outbound = new WorkersScriptBindingsOutboundOutputReference(this, "outbound");
  public get outbound() {
    return this._outbound;
  }
  public putOutbound(value: WorkersScriptBindingsOutbound) {
    this._outbound.internalValue = value;
  }
  public resetOutbound() {
    this._outbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound.internalValue;
  }

  // part - computed: true, optional: true, required: false
  private _part?: string; 
  public get part() {
    return this.getStringAttribute('part');
  }
  public set part(value: string) {
    this._part = value;
  }
  public resetPart() {
    this._part = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partInput() {
    return this._part;
  }

  // pipeline - computed: true, optional: true, required: false
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

  // queue_name - computed: true, optional: true, required: false
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

  // secret_name - computed: true, optional: true, required: false
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

  // service - computed: true, optional: true, required: false
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

  // store_id - computed: true, optional: true, required: false
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

  // text - computed: true, optional: true, required: false
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

  // type - computed: true, optional: false, required: true
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

  // usages - computed: true, optional: true, required: false
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

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // workflow_name - computed: true, optional: true, required: false
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

export class WorkersScriptBindingsList extends cdktf.ComplexList {
  public internalValue? : WorkersScriptBindings[] | cdktf.IResolvable

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
  public get(index: number): WorkersScriptBindingsOutputReference {
    return new WorkersScriptBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersScriptLimits {
  /**
  * The amount of CPU time this Worker can use in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#cpu_ms WorkersScript#cpu_ms}
  */
  readonly cpuMs?: number;
}

export function workersScriptLimitsToTerraform(struct?: WorkersScriptLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_ms: cdktf.numberToTerraform(struct!.cpuMs),
  }
}


export function workersScriptLimitsToHclTerraform(struct?: WorkersScriptLimits | cdktf.IResolvable): any {
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

export class WorkersScriptLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkersScriptLimits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkersScriptLimits | cdktf.IResolvable | undefined) {
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

  // cpu_ms - computed: false, optional: true, required: false
  private _cpuMs?: number; 
  public get cpuMs() {
    return this.getNumberAttribute('cpu_ms');
  }
  public set cpuMs(value: number) {
    this._cpuMs = value;
  }
  public resetCpuMs() {
    this._cpuMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuMsInput() {
    return this._cpuMs;
  }
}
export interface WorkersScriptMigrationsRenamedClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#from WorkersScript#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#to WorkersScript#to}
  */
  readonly to?: string;
}

export function workersScriptMigrationsRenamedClassesToTerraform(struct?: WorkersScriptMigrationsRenamedClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function workersScriptMigrationsRenamedClassesToHclTerraform(struct?: WorkersScriptMigrationsRenamedClasses | cdktf.IResolvable): any {
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

export class WorkersScriptMigrationsRenamedClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersScriptMigrationsRenamedClasses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkersScriptMigrationsRenamedClasses | cdktf.IResolvable | undefined) {
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

export class WorkersScriptMigrationsRenamedClassesList extends cdktf.ComplexList {
  public internalValue? : WorkersScriptMigrationsRenamedClasses[] | cdktf.IResolvable

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
  public get(index: number): WorkersScriptMigrationsRenamedClassesOutputReference {
    return new WorkersScriptMigrationsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersScriptMigrationsStepsRenamedClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#from WorkersScript#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#to WorkersScript#to}
  */
  readonly to?: string;
}

export function workersScriptMigrationsStepsRenamedClassesToTerraform(struct?: WorkersScriptMigrationsStepsRenamedClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function workersScriptMigrationsStepsRenamedClassesToHclTerraform(struct?: WorkersScriptMigrationsStepsRenamedClasses | cdktf.IResolvable): any {
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

export class WorkersScriptMigrationsStepsRenamedClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersScriptMigrationsStepsRenamedClasses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkersScriptMigrationsStepsRenamedClasses | cdktf.IResolvable | undefined) {
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

export class WorkersScriptMigrationsStepsRenamedClassesList extends cdktf.ComplexList {
  public internalValue? : WorkersScriptMigrationsStepsRenamedClasses[] | cdktf.IResolvable

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
  public get(index: number): WorkersScriptMigrationsStepsRenamedClassesOutputReference {
    return new WorkersScriptMigrationsStepsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersScriptMigrationsStepsTransferredClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#from WorkersScript#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#from_script WorkersScript#from_script}
  */
  readonly fromScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#to WorkersScript#to}
  */
  readonly to?: string;
}

export function workersScriptMigrationsStepsTransferredClassesToTerraform(struct?: WorkersScriptMigrationsStepsTransferredClasses | cdktf.IResolvable): any {
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


export function workersScriptMigrationsStepsTransferredClassesToHclTerraform(struct?: WorkersScriptMigrationsStepsTransferredClasses | cdktf.IResolvable): any {
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

export class WorkersScriptMigrationsStepsTransferredClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersScriptMigrationsStepsTransferredClasses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkersScriptMigrationsStepsTransferredClasses | cdktf.IResolvable | undefined) {
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

export class WorkersScriptMigrationsStepsTransferredClassesList extends cdktf.ComplexList {
  public internalValue? : WorkersScriptMigrationsStepsTransferredClasses[] | cdktf.IResolvable

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
  public get(index: number): WorkersScriptMigrationsStepsTransferredClassesOutputReference {
    return new WorkersScriptMigrationsStepsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersScriptMigrationsSteps {
  /**
  * A list of classes to delete Durable Object namespaces from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}
  */
  readonly deletedClasses?: string[];
  /**
  * A list of classes to create Durable Object namespaces from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#new_classes WorkersScript#new_classes}
  */
  readonly newClasses?: string[];
  /**
  * A list of classes to create Durable Object namespaces with SQLite from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}
  */
  readonly newSqliteClasses?: string[];
  /**
  * A list of classes with Durable Object namespaces that were renamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}
  */
  readonly renamedClasses?: WorkersScriptMigrationsStepsRenamedClasses[] | cdktf.IResolvable;
  /**
  * A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}
  */
  readonly transferredClasses?: WorkersScriptMigrationsStepsTransferredClasses[] | cdktf.IResolvable;
}

export function workersScriptMigrationsStepsToTerraform(struct?: WorkersScriptMigrationsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deleted_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deletedClasses),
    new_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.newClasses),
    new_sqlite_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.newSqliteClasses),
    renamed_classes: cdktf.listMapper(workersScriptMigrationsStepsRenamedClassesToTerraform, false)(struct!.renamedClasses),
    transferred_classes: cdktf.listMapper(workersScriptMigrationsStepsTransferredClassesToTerraform, false)(struct!.transferredClasses),
  }
}


export function workersScriptMigrationsStepsToHclTerraform(struct?: WorkersScriptMigrationsSteps | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(workersScriptMigrationsStepsRenamedClassesToHclTerraform, false)(struct!.renamedClasses),
      isBlock: true,
      type: "list",
      storageClassType: "WorkersScriptMigrationsStepsRenamedClassesList",
    },
    transferred_classes: {
      value: cdktf.listMapperHcl(workersScriptMigrationsStepsTransferredClassesToHclTerraform, false)(struct!.transferredClasses),
      isBlock: true,
      type: "list",
      storageClassType: "WorkersScriptMigrationsStepsTransferredClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersScriptMigrationsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersScriptMigrationsSteps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkersScriptMigrationsSteps | cdktf.IResolvable | undefined) {
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
  private _renamedClasses = new WorkersScriptMigrationsStepsRenamedClassesList(this, "renamed_classes", false);
  public get renamedClasses() {
    return this._renamedClasses;
  }
  public putRenamedClasses(value: WorkersScriptMigrationsStepsRenamedClasses[] | cdktf.IResolvable) {
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
  private _transferredClasses = new WorkersScriptMigrationsStepsTransferredClassesList(this, "transferred_classes", false);
  public get transferredClasses() {
    return this._transferredClasses;
  }
  public putTransferredClasses(value: WorkersScriptMigrationsStepsTransferredClasses[] | cdktf.IResolvable) {
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

export class WorkersScriptMigrationsStepsList extends cdktf.ComplexList {
  public internalValue? : WorkersScriptMigrationsSteps[] | cdktf.IResolvable

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
  public get(index: number): WorkersScriptMigrationsStepsOutputReference {
    return new WorkersScriptMigrationsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersScriptMigrationsTransferredClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#from WorkersScript#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#from_script WorkersScript#from_script}
  */
  readonly fromScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#to WorkersScript#to}
  */
  readonly to?: string;
}

export function workersScriptMigrationsTransferredClassesToTerraform(struct?: WorkersScriptMigrationsTransferredClasses | cdktf.IResolvable): any {
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


export function workersScriptMigrationsTransferredClassesToHclTerraform(struct?: WorkersScriptMigrationsTransferredClasses | cdktf.IResolvable): any {
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

export class WorkersScriptMigrationsTransferredClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersScriptMigrationsTransferredClasses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkersScriptMigrationsTransferredClasses | cdktf.IResolvable | undefined) {
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

export class WorkersScriptMigrationsTransferredClassesList extends cdktf.ComplexList {
  public internalValue? : WorkersScriptMigrationsTransferredClasses[] | cdktf.IResolvable

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
  public get(index: number): WorkersScriptMigrationsTransferredClassesOutputReference {
    return new WorkersScriptMigrationsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersScriptMigrations {
  /**
  * A list of classes to delete Durable Object namespaces from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}
  */
  readonly deletedClasses?: string[];
  /**
  * A list of classes to create Durable Object namespaces from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#new_classes WorkersScript#new_classes}
  */
  readonly newClasses?: string[];
  /**
  * A list of classes to create Durable Object namespaces with SQLite from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}
  */
  readonly newSqliteClasses?: string[];
  /**
  * Tag to set as the latest migration tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#new_tag WorkersScript#new_tag}
  */
  readonly newTag?: string;
  /**
  * Tag used to verify against the latest migration tag for this Worker. If they don't match, the upload is rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#old_tag WorkersScript#old_tag}
  */
  readonly oldTag?: string;
  /**
  * A list of classes with Durable Object namespaces that were renamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}
  */
  readonly renamedClasses?: WorkersScriptMigrationsRenamedClasses[] | cdktf.IResolvable;
  /**
  * Migrations to apply in order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#steps WorkersScript#steps}
  */
  readonly steps?: WorkersScriptMigrationsSteps[] | cdktf.IResolvable;
  /**
  * A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}
  */
  readonly transferredClasses?: WorkersScriptMigrationsTransferredClasses[] | cdktf.IResolvable;
}

export function workersScriptMigrationsToTerraform(struct?: WorkersScriptMigrations | cdktf.IResolvable): any {
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
    renamed_classes: cdktf.listMapper(workersScriptMigrationsRenamedClassesToTerraform, false)(struct!.renamedClasses),
    steps: cdktf.listMapper(workersScriptMigrationsStepsToTerraform, false)(struct!.steps),
    transferred_classes: cdktf.listMapper(workersScriptMigrationsTransferredClassesToTerraform, false)(struct!.transferredClasses),
  }
}


export function workersScriptMigrationsToHclTerraform(struct?: WorkersScriptMigrations | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(workersScriptMigrationsRenamedClassesToHclTerraform, false)(struct!.renamedClasses),
      isBlock: true,
      type: "list",
      storageClassType: "WorkersScriptMigrationsRenamedClassesList",
    },
    steps: {
      value: cdktf.listMapperHcl(workersScriptMigrationsStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "WorkersScriptMigrationsStepsList",
    },
    transferred_classes: {
      value: cdktf.listMapperHcl(workersScriptMigrationsTransferredClassesToHclTerraform, false)(struct!.transferredClasses),
      isBlock: true,
      type: "list",
      storageClassType: "WorkersScriptMigrationsTransferredClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersScriptMigrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkersScriptMigrations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkersScriptMigrations | cdktf.IResolvable | undefined) {
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
  private _renamedClasses = new WorkersScriptMigrationsRenamedClassesList(this, "renamed_classes", false);
  public get renamedClasses() {
    return this._renamedClasses;
  }
  public putRenamedClasses(value: WorkersScriptMigrationsRenamedClasses[] | cdktf.IResolvable) {
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
  private _steps = new WorkersScriptMigrationsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: WorkersScriptMigrationsSteps[] | cdktf.IResolvable) {
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
  private _transferredClasses = new WorkersScriptMigrationsTransferredClassesList(this, "transferred_classes", false);
  public get transferredClasses() {
    return this._transferredClasses;
  }
  public putTransferredClasses(value: WorkersScriptMigrationsTransferredClasses[] | cdktf.IResolvable) {
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
export interface WorkersScriptNamedHandlers {
}

export function workersScriptNamedHandlersToTerraform(struct?: WorkersScriptNamedHandlers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workersScriptNamedHandlersToHclTerraform(struct?: WorkersScriptNamedHandlers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkersScriptNamedHandlersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkersScriptNamedHandlers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersScriptNamedHandlers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // handlers - computed: true, optional: false, required: false
  public get handlers() {
    return this.getListAttribute('handlers');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class WorkersScriptNamedHandlersList extends cdktf.ComplexList {

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
  public get(index: number): WorkersScriptNamedHandlersOutputReference {
    return new WorkersScriptNamedHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersScriptObservabilityLogs {
  /**
  * A list of destinations where logs will be exported to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#destinations WorkersScript#destinations}
  */
  readonly destinations?: string[];
  /**
  * Whether logs are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#enabled WorkersScript#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}
  */
  readonly headSamplingRate?: number;
  /**
  * Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#invocation_logs WorkersScript#invocation_logs}
  */
  readonly invocationLogs: boolean | cdktf.IResolvable;
  /**
  * Whether log persistence is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#persist WorkersScript#persist}
  */
  readonly persist?: boolean | cdktf.IResolvable;
}

export function workersScriptObservabilityLogsToTerraform(struct?: WorkersScriptObservabilityLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    head_sampling_rate: cdktf.numberToTerraform(struct!.headSamplingRate),
    invocation_logs: cdktf.booleanToTerraform(struct!.invocationLogs),
    persist: cdktf.booleanToTerraform(struct!.persist),
  }
}


export function workersScriptObservabilityLogsToHclTerraform(struct?: WorkersScriptObservabilityLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    head_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.headSamplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invocation_logs: {
      value: cdktf.booleanToHclTerraform(struct!.invocationLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persist: {
      value: cdktf.booleanToHclTerraform(struct!.persist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersScriptObservabilityLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkersScriptObservabilityLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.headSamplingRate = this._headSamplingRate;
    }
    if (this._invocationLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationLogs = this._invocationLogs;
    }
    if (this._persist !== undefined) {
      hasAnyValues = true;
      internalValueResult.persist = this._persist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersScriptObservabilityLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations = undefined;
      this._enabled = undefined;
      this._headSamplingRate = undefined;
      this._invocationLogs = undefined;
      this._persist = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations = value.destinations;
      this._enabled = value.enabled;
      this._headSamplingRate = value.headSamplingRate;
      this._invocationLogs = value.invocationLogs;
      this._persist = value.persist;
    }
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // head_sampling_rate - computed: false, optional: true, required: false
  private _headSamplingRate?: number; 
  public get headSamplingRate() {
    return this.getNumberAttribute('head_sampling_rate');
  }
  public set headSamplingRate(value: number) {
    this._headSamplingRate = value;
  }
  public resetHeadSamplingRate() {
    this._headSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headSamplingRateInput() {
    return this._headSamplingRate;
  }

  // invocation_logs - computed: false, optional: false, required: true
  private _invocationLogs?: boolean | cdktf.IResolvable; 
  public get invocationLogs() {
    return this.getBooleanAttribute('invocation_logs');
  }
  public set invocationLogs(value: boolean | cdktf.IResolvable) {
    this._invocationLogs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationLogsInput() {
    return this._invocationLogs;
  }

  // persist - computed: true, optional: true, required: false
  private _persist?: boolean | cdktf.IResolvable; 
  public get persist() {
    return this.getBooleanAttribute('persist');
  }
  public set persist(value: boolean | cdktf.IResolvable) {
    this._persist = value;
  }
  public resetPersist() {
    this._persist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistInput() {
    return this._persist;
  }
}
export interface WorkersScriptObservability {
  /**
  * Whether observability is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#enabled WorkersScript#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}
  */
  readonly headSamplingRate?: number;
  /**
  * Log settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#logs WorkersScript#logs}
  */
  readonly logs?: WorkersScriptObservabilityLogs;
}

export function workersScriptObservabilityToTerraform(struct?: WorkersScriptObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    head_sampling_rate: cdktf.numberToTerraform(struct!.headSamplingRate),
    logs: workersScriptObservabilityLogsToTerraform(struct!.logs),
  }
}


export function workersScriptObservabilityToHclTerraform(struct?: WorkersScriptObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    head_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.headSamplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logs: {
      value: workersScriptObservabilityLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkersScriptObservabilityLogs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersScriptObservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkersScriptObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.headSamplingRate = this._headSamplingRate;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersScriptObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._headSamplingRate = undefined;
      this._logs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._headSamplingRate = value.headSamplingRate;
      this._logs.internalValue = value.logs;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // head_sampling_rate - computed: false, optional: true, required: false
  private _headSamplingRate?: number; 
  public get headSamplingRate() {
    return this.getNumberAttribute('head_sampling_rate');
  }
  public set headSamplingRate(value: number) {
    this._headSamplingRate = value;
  }
  public resetHeadSamplingRate() {
    this._headSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headSamplingRateInput() {
    return this._headSamplingRate;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new WorkersScriptObservabilityLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: WorkersScriptObservabilityLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }
}
export interface WorkersScriptPlacement {
  /**
  * Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
  * Available values: "smart".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#mode WorkersScript#mode}
  */
  readonly mode?: string;
}

export function workersScriptPlacementToTerraform(struct?: WorkersScriptPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function workersScriptPlacementToHclTerraform(struct?: WorkersScriptPlacement | cdktf.IResolvable): any {
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

export class WorkersScriptPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkersScriptPlacement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkersScriptPlacement | cdktf.IResolvable | undefined) {
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

  // last_analyzed_at - computed: true, optional: false, required: false
  public get lastAnalyzedAt() {
    return this.getStringAttribute('last_analyzed_at');
  }

  // mode - computed: true, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface WorkersScriptTailConsumers {
  /**
  * Optional environment if the Worker utilizes one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#environment WorkersScript#environment}
  */
  readonly environment?: string;
  /**
  * Optional dispatch namespace the script belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#namespace WorkersScript#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of Worker that is to be the consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#service WorkersScript#service}
  */
  readonly service: string;
}

export function workersScriptTailConsumersToTerraform(struct?: WorkersScriptTailConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function workersScriptTailConsumersToHclTerraform(struct?: WorkersScriptTailConsumers | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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

export class WorkersScriptTailConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersScriptTailConsumers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersScriptTailConsumers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
      this._service = value.service;
    }
  }

  // environment - computed: true, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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

  // service - computed: true, optional: false, required: true
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

export class WorkersScriptTailConsumersList extends cdktf.ComplexList {
  public internalValue? : WorkersScriptTailConsumers[] | cdktf.IResolvable

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
  public get(index: number): WorkersScriptTailConsumersOutputReference {
    return new WorkersScriptTailConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script cloudflare_workers_script}
*/
export class WorkersScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_workers_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkersScript to import
  * @param importFromId The id of the existing WorkersScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkersScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/workers_script cloudflare_workers_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkersScriptConfig
  */
  public constructor(scope: Construct, id: string, config: WorkersScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_workers_script',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.11.0',
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
    this._assets.internalValue = config.assets;
    this._bindings.internalValue = config.bindings;
    this._bodyPart = config.bodyPart;
    this._compatibilityDate = config.compatibilityDate;
    this._compatibilityFlags = config.compatibilityFlags;
    this._content = config.content;
    this._contentFile = config.contentFile;
    this._contentSha256 = config.contentSha256;
    this._contentType = config.contentType;
    this._keepAssets = config.keepAssets;
    this._keepBindings = config.keepBindings;
    this._limits.internalValue = config.limits;
    this._logpush = config.logpush;
    this._mainModule = config.mainModule;
    this._migrations.internalValue = config.migrations;
    this._observability.internalValue = config.observability;
    this._placement.internalValue = config.placement;
    this._scriptName = config.scriptName;
    this._tailConsumers.internalValue = config.tailConsumers;
    this._usageModel = config.usageModel;
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

  // assets - computed: false, optional: true, required: false
  private _assets = new WorkersScriptAssetsOutputReference(this, "assets");
  public get assets() {
    return this._assets;
  }
  public putAssets(value: WorkersScriptAssets) {
    this._assets.internalValue = value;
  }
  public resetAssets() {
    this._assets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsInput() {
    return this._assets.internalValue;
  }

  // bindings - computed: true, optional: true, required: false
  private _bindings = new WorkersScriptBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: WorkersScriptBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }

  // body_part - computed: false, optional: true, required: false
  private _bodyPart?: string; 
  public get bodyPart() {
    return this.getStringAttribute('body_part');
  }
  public set bodyPart(value: string) {
    this._bodyPart = value;
  }
  public resetBodyPart() {
    this._bodyPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyPartInput() {
    return this._bodyPart;
  }

  // compatibility_date - computed: true, optional: true, required: false
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

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_file - computed: false, optional: true, required: false
  private _contentFile?: string; 
  public get contentFile() {
    return this.getStringAttribute('content_file');
  }
  public set contentFile(value: string) {
    this._contentFile = value;
  }
  public resetContentFile() {
    this._contentFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFileInput() {
    return this._contentFile;
  }

  // content_sha256 - computed: false, optional: true, required: false
  private _contentSha256?: string; 
  public get contentSha256() {
    return this.getStringAttribute('content_sha256');
  }
  public set contentSha256(value: string) {
    this._contentSha256 = value;
  }
  public resetContentSha256() {
    this._contentSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSha256Input() {
    return this._contentSha256;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // handlers - computed: true, optional: false, required: false
  public get handlers() {
    return this.getListAttribute('handlers');
  }

  // has_assets - computed: true, optional: false, required: false
  public get hasAssets() {
    return this.getBooleanAttribute('has_assets');
  }

  // has_modules - computed: true, optional: false, required: false
  public get hasModules() {
    return this.getBooleanAttribute('has_modules');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_assets - computed: false, optional: true, required: false
  private _keepAssets?: boolean | cdktf.IResolvable; 
  public get keepAssets() {
    return this.getBooleanAttribute('keep_assets');
  }
  public set keepAssets(value: boolean | cdktf.IResolvable) {
    this._keepAssets = value;
  }
  public resetKeepAssets() {
    this._keepAssets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAssetsInput() {
    return this._keepAssets;
  }

  // keep_bindings - computed: false, optional: true, required: false
  private _keepBindings?: string[]; 
  public get keepBindings() {
    return cdktf.Fn.tolist(this.getListAttribute('keep_bindings'));
  }
  public set keepBindings(value: string[]) {
    this._keepBindings = value;
  }
  public resetKeepBindings() {
    this._keepBindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepBindingsInput() {
    return this._keepBindings;
  }

  // last_deployed_from - computed: true, optional: false, required: false
  public get lastDeployedFrom() {
    return this.getStringAttribute('last_deployed_from');
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new WorkersScriptLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: WorkersScriptLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // logpush - computed: true, optional: true, required: false
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

  // migration_tag - computed: true, optional: false, required: false
  public get migrationTag() {
    return this.getStringAttribute('migration_tag');
  }

  // migrations - computed: false, optional: true, required: false
  private _migrations = new WorkersScriptMigrationsOutputReference(this, "migrations");
  public get migrations() {
    return this._migrations;
  }
  public putMigrations(value: WorkersScriptMigrations) {
    this._migrations.internalValue = value;
  }
  public resetMigrations() {
    this._migrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationsInput() {
    return this._migrations.internalValue;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // named_handlers - computed: true, optional: false, required: false
  private _namedHandlers = new WorkersScriptNamedHandlersList(this, "named_handlers", false);
  public get namedHandlers() {
    return this._namedHandlers;
  }

  // observability - computed: false, optional: true, required: false
  private _observability = new WorkersScriptObservabilityOutputReference(this, "observability");
  public get observability() {
    return this._observability;
  }
  public putObservability(value: WorkersScriptObservability) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
  }

  // placement - computed: true, optional: true, required: false
  private _placement = new WorkersScriptPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: WorkersScriptPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // script_name - computed: false, optional: false, required: true
  private _scriptName?: string; 
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }
  public set scriptName(value: string) {
    this._scriptName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptNameInput() {
    return this._scriptName;
  }

  // startup_time_ms - computed: true, optional: false, required: false
  public get startupTimeMs() {
    return this.getNumberAttribute('startup_time_ms');
  }

  // tail_consumers - computed: true, optional: true, required: false
  private _tailConsumers = new WorkersScriptTailConsumersList(this, "tail_consumers", true);
  public get tailConsumers() {
    return this._tailConsumers;
  }
  public putTailConsumers(value: WorkersScriptTailConsumers[] | cdktf.IResolvable) {
    this._tailConsumers.internalValue = value;
  }
  public resetTailConsumers() {
    this._tailConsumers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailConsumersInput() {
    return this._tailConsumers.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      assets: workersScriptAssetsToTerraform(this._assets.internalValue),
      bindings: cdktf.listMapper(workersScriptBindingsToTerraform, false)(this._bindings.internalValue),
      body_part: cdktf.stringToTerraform(this._bodyPart),
      compatibility_date: cdktf.stringToTerraform(this._compatibilityDate),
      compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibilityFlags),
      content: cdktf.stringToTerraform(this._content),
      content_file: cdktf.stringToTerraform(this._contentFile),
      content_sha256: cdktf.stringToTerraform(this._contentSha256),
      content_type: cdktf.stringToTerraform(this._contentType),
      keep_assets: cdktf.booleanToTerraform(this._keepAssets),
      keep_bindings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keepBindings),
      limits: workersScriptLimitsToTerraform(this._limits.internalValue),
      logpush: cdktf.booleanToTerraform(this._logpush),
      main_module: cdktf.stringToTerraform(this._mainModule),
      migrations: workersScriptMigrationsToTerraform(this._migrations.internalValue),
      observability: workersScriptObservabilityToTerraform(this._observability.internalValue),
      placement: workersScriptPlacementToTerraform(this._placement.internalValue),
      script_name: cdktf.stringToTerraform(this._scriptName),
      tail_consumers: cdktf.listMapper(workersScriptTailConsumersToTerraform, false)(this._tailConsumers.internalValue),
      usage_model: cdktf.stringToTerraform(this._usageModel),
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
      assets: {
        value: workersScriptAssetsToHclTerraform(this._assets.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkersScriptAssets",
      },
      bindings: {
        value: cdktf.listMapperHcl(workersScriptBindingsToHclTerraform, false)(this._bindings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkersScriptBindingsList",
      },
      body_part: {
        value: cdktf.stringToHclTerraform(this._bodyPart),
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
      content_file: {
        value: cdktf.stringToHclTerraform(this._contentFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_sha256: {
        value: cdktf.stringToHclTerraform(this._contentSha256),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_assets: {
        value: cdktf.booleanToHclTerraform(this._keepAssets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_bindings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keepBindings),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      limits: {
        value: workersScriptLimitsToHclTerraform(this._limits.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkersScriptLimits",
      },
      logpush: {
        value: cdktf.booleanToHclTerraform(this._logpush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      main_module: {
        value: cdktf.stringToHclTerraform(this._mainModule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migrations: {
        value: workersScriptMigrationsToHclTerraform(this._migrations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkersScriptMigrations",
      },
      observability: {
        value: workersScriptObservabilityToHclTerraform(this._observability.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkersScriptObservability",
      },
      placement: {
        value: workersScriptPlacementToHclTerraform(this._placement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkersScriptPlacement",
      },
      script_name: {
        value: cdktf.stringToHclTerraform(this._scriptName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tail_consumers: {
        value: cdktf.listMapperHcl(workersScriptTailConsumersToHclTerraform, false)(this._tailConsumers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersScriptTailConsumersList",
      },
      usage_model: {
        value: cdktf.stringToHclTerraform(this._usageModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
