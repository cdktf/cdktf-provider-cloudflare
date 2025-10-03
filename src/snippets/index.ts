/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/snippets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnippetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of files belonging to the snippet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/snippets#files Snippets#files}
  */
  readonly files: string[];
  /**
  * Metadata about the snippet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/snippets#metadata Snippets#metadata}
  */
  readonly metadata: SnippetsMetadata;
  /**
  * The identifying name of the snippet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/snippets#snippet_name Snippets#snippet_name}
  */
  readonly snippetName: string;
  /**
  * The unique ID of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/snippets#zone_id Snippets#zone_id}
  */
  readonly zoneId: string;
}
export interface SnippetsMetadata {
  /**
  * Name of the file that contains the main module of the snippet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/snippets#main_module Snippets#main_module}
  */
  readonly mainModule: string;
}

export function snippetsMetadataToTerraform(struct?: SnippetsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_module: cdktf.stringToTerraform(struct!.mainModule),
  }
}


export function snippetsMetadataToHclTerraform(struct?: SnippetsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main_module: {
      value: cdktf.stringToHclTerraform(struct!.mainModule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnippetsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnippetsMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainModule !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainModule = this._mainModule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnippetsMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mainModule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mainModule = value.mainModule;
    }
  }

  // main_module - computed: false, optional: false, required: true
  private _mainModule?: string; 
  public get mainModule() {
    return this.getStringAttribute('main_module');
  }
  public set mainModule(value: string) {
    this._mainModule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainModuleInput() {
    return this._mainModule;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/snippets cloudflare_snippets}
*/
export class Snippets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_snippets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snippets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snippets to import
  * @param importFromId The id of the existing Snippets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/snippets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snippets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_snippets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/snippets cloudflare_snippets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnippetsConfig
  */
  public constructor(scope: Construct, id: string, config: SnippetsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_snippets',
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
    this._files = config.files;
    this._metadata.internalValue = config.metadata;
    this._snippetName = config.snippetName;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // files - computed: false, optional: false, required: true
  private _files?: string[]; 
  public get files() {
    return this.getListAttribute('files');
  }
  public set files(value: string[]) {
    this._files = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new SnippetsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SnippetsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // snippet_name - computed: false, optional: false, required: true
  private _snippetName?: string; 
  public get snippetName() {
    return this.getStringAttribute('snippet_name');
  }
  public set snippetName(value: string) {
    this._snippetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetNameInput() {
    return this._snippetName;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._files),
      metadata: snippetsMetadataToTerraform(this._metadata.internalValue),
      snippet_name: cdktf.stringToTerraform(this._snippetName),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._files),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      metadata: {
        value: snippetsMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnippetsMetadata",
      },
      snippet_name: {
        value: cdktf.stringToHclTerraform(this._snippetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
