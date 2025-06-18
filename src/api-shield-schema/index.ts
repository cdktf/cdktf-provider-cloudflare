/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/api_shield_schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiShieldSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Schema file bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/api_shield_schema#file ApiShieldSchema#file}
  */
  readonly file: string;
  /**
  * Kind of schema
  * Available values: "openapi_v3".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/api_shield_schema#kind ApiShieldSchema#kind}
  */
  readonly kind: string;
  /**
  * Name of the schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/api_shield_schema#name ApiShieldSchema#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/api_shield_schema#schema_id ApiShieldSchema#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Flag whether schema is enabled for validation.
  * Available values: "true", "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/api_shield_schema#validation_enabled ApiShieldSchema#validation_enabled}
  */
  readonly validationEnabled?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/api_shield_schema#zone_id ApiShieldSchema#zone_id}
  */
  readonly zoneId: string;
}
export interface ApiShieldSchemaSchema {
}

export function apiShieldSchemaSchemaToTerraform(struct?: ApiShieldSchemaSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiShieldSchemaSchemaToHclTerraform(struct?: ApiShieldSchemaSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiShieldSchemaSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiShieldSchemaSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiShieldSchemaSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema_id - computed: true, optional: false, required: false
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // validation_enabled - computed: true, optional: false, required: false
  public get validationEnabled() {
    return this.getBooleanAttribute('validation_enabled');
  }
}
export interface ApiShieldSchemaUploadDetailsWarnings {
}

export function apiShieldSchemaUploadDetailsWarningsToTerraform(struct?: ApiShieldSchemaUploadDetailsWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiShieldSchemaUploadDetailsWarningsToHclTerraform(struct?: ApiShieldSchemaUploadDetailsWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiShieldSchemaUploadDetailsWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiShieldSchemaUploadDetailsWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiShieldSchemaUploadDetailsWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class ApiShieldSchemaUploadDetailsWarningsList extends cdktf.ComplexList {

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
  public get(index: number): ApiShieldSchemaUploadDetailsWarningsOutputReference {
    return new ApiShieldSchemaUploadDetailsWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiShieldSchemaUploadDetails {
}

export function apiShieldSchemaUploadDetailsToTerraform(struct?: ApiShieldSchemaUploadDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiShieldSchemaUploadDetailsToHclTerraform(struct?: ApiShieldSchemaUploadDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiShieldSchemaUploadDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiShieldSchemaUploadDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiShieldSchemaUploadDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // warnings - computed: true, optional: false, required: false
  private _warnings = new ApiShieldSchemaUploadDetailsWarningsList(this, "warnings", false);
  public get warnings() {
    return this._warnings;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/api_shield_schema cloudflare_api_shield_schema}
*/
export class ApiShieldSchema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_api_shield_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiShieldSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiShieldSchema to import
  * @param importFromId The id of the existing ApiShieldSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/api_shield_schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiShieldSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/api_shield_schema cloudflare_api_shield_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiShieldSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: ApiShieldSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_api_shield_schema',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.6.0',
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
    this._file = config.file;
    this._kind = config.kind;
    this._name = config.name;
    this._schemaId = config.schemaId;
    this._validationEnabled = config.validationEnabled;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new ApiShieldSchemaSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // upload_details - computed: true, optional: false, required: false
  private _uploadDetails = new ApiShieldSchemaUploadDetailsOutputReference(this, "upload_details");
  public get uploadDetails() {
    return this._uploadDetails;
  }

  // validation_enabled - computed: false, optional: true, required: false
  private _validationEnabled?: string; 
  public get validationEnabled() {
    return this.getStringAttribute('validation_enabled');
  }
  public set validationEnabled(value: string) {
    this._validationEnabled = value;
  }
  public resetValidationEnabled() {
    this._validationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationEnabledInput() {
    return this._validationEnabled;
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
      file: cdktf.stringToTerraform(this._file),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      validation_enabled: cdktf.stringToTerraform(this._validationEnabled),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_enabled: {
        value: cdktf.stringToHclTerraform(this._validationEnabled),
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
