// https://www.terraform.io/docs/providers/cloudflare/r/worker_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#content WorkerScript#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}
  */
  readonly name: string;
  /**
  * kv_namespace_binding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#kv_namespace_binding WorkerScript#kv_namespace_binding}
  */
  readonly kvNamespaceBinding?: WorkerScriptKvNamespaceBinding[] | cdktf.IResolvable;
  /**
  * plain_text_binding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#plain_text_binding WorkerScript#plain_text_binding}
  */
  readonly plainTextBinding?: WorkerScriptPlainTextBinding[] | cdktf.IResolvable;
  /**
  * secret_text_binding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#secret_text_binding WorkerScript#secret_text_binding}
  */
  readonly secretTextBinding?: WorkerScriptSecretTextBinding[] | cdktf.IResolvable;
  /**
  * webassembly_binding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#webassembly_binding WorkerScript#webassembly_binding}
  */
  readonly webassemblyBinding?: WorkerScriptWebassemblyBinding[] | cdktf.IResolvable;
}
export interface WorkerScriptKvNamespaceBinding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#namespace_id WorkerScript#namespace_id}
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

export interface WorkerScriptPlainTextBinding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#text WorkerScript#text}
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

export interface WorkerScriptSecretTextBinding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#text WorkerScript#text}
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

export interface WorkerScriptWebassemblyBinding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#module WorkerScript#module}
  */
  readonly module: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script#name WorkerScript#name}
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script cloudflare_worker_script}
*/
export class WorkerScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_worker_script";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/worker_script cloudflare_worker_script} Resource
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
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._content = config.content;
    this._name = config.name;
    this._kvNamespaceBinding = config.kvNamespaceBinding;
    this._plainTextBinding = config.plainTextBinding;
    this._secretTextBinding = config.secretTextBinding;
    this._webassemblyBinding = config.webassemblyBinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // kv_namespace_binding - computed: false, optional: true, required: false
  private _kvNamespaceBinding?: WorkerScriptKvNamespaceBinding[] | cdktf.IResolvable; 
  public get kvNamespaceBinding() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('kv_namespace_binding')));
  }
  public set kvNamespaceBinding(value: WorkerScriptKvNamespaceBinding[] | cdktf.IResolvable) {
    this._kvNamespaceBinding = value;
  }
  public resetKvNamespaceBinding() {
    this._kvNamespaceBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvNamespaceBindingInput() {
    return this._kvNamespaceBinding;
  }

  // plain_text_binding - computed: false, optional: true, required: false
  private _plainTextBinding?: WorkerScriptPlainTextBinding[] | cdktf.IResolvable; 
  public get plainTextBinding() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('plain_text_binding')));
  }
  public set plainTextBinding(value: WorkerScriptPlainTextBinding[] | cdktf.IResolvable) {
    this._plainTextBinding = value;
  }
  public resetPlainTextBinding() {
    this._plainTextBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextBindingInput() {
    return this._plainTextBinding;
  }

  // secret_text_binding - computed: false, optional: true, required: false
  private _secretTextBinding?: WorkerScriptSecretTextBinding[] | cdktf.IResolvable; 
  public get secretTextBinding() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('secret_text_binding')));
  }
  public set secretTextBinding(value: WorkerScriptSecretTextBinding[] | cdktf.IResolvable) {
    this._secretTextBinding = value;
  }
  public resetSecretTextBinding() {
    this._secretTextBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTextBindingInput() {
    return this._secretTextBinding;
  }

  // webassembly_binding - computed: false, optional: true, required: false
  private _webassemblyBinding?: WorkerScriptWebassemblyBinding[] | cdktf.IResolvable; 
  public get webassemblyBinding() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('webassembly_binding')));
  }
  public set webassemblyBinding(value: WorkerScriptWebassemblyBinding[] | cdktf.IResolvable) {
    this._webassemblyBinding = value;
  }
  public resetWebassemblyBinding() {
    this._webassemblyBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webassemblyBindingInput() {
    return this._webassemblyBinding;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      name: cdktf.stringToTerraform(this._name),
      kv_namespace_binding: cdktf.listMapper(workerScriptKvNamespaceBindingToTerraform)(this._kvNamespaceBinding),
      plain_text_binding: cdktf.listMapper(workerScriptPlainTextBindingToTerraform)(this._plainTextBinding),
      secret_text_binding: cdktf.listMapper(workerScriptSecretTextBindingToTerraform)(this._secretTextBinding),
      webassembly_binding: cdktf.listMapper(workerScriptWebassemblyBindingToTerraform)(this._webassemblyBinding),
    };
  }
}
