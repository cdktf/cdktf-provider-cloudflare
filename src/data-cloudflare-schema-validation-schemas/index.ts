/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareSchemaValidationSchemasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#filter DataCloudflareSchemaValidationSchemas#filter}
  */
  readonly filter?: DataCloudflareSchemaValidationSchemasFilter;
  /**
  * Omit the source-files of schemas and only retrieve their meta-data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#omit_source DataCloudflareSchemaValidationSchemas#omit_source}
  */
  readonly omitSource?: boolean | cdktf.IResolvable;
  /**
  * UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#schema_id DataCloudflareSchemaValidationSchemas#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#zone_id DataCloudflareSchemaValidationSchemas#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareSchemaValidationSchemasFilter {
  /**
  * Omit the source-files of schemas and only retrieve their meta-data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#omit_source DataCloudflareSchemaValidationSchemas#omit_source}
  */
  readonly omitSource?: boolean | cdktf.IResolvable;
  /**
  * Filter for enabled schemas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#validation_enabled DataCloudflareSchemaValidationSchemas#validation_enabled}
  */
  readonly validationEnabled?: boolean | cdktf.IResolvable;
}

export function dataCloudflareSchemaValidationSchemasFilterToTerraform(struct?: DataCloudflareSchemaValidationSchemasFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    omit_source: cdktf.booleanToTerraform(struct!.omitSource),
    validation_enabled: cdktf.booleanToTerraform(struct!.validationEnabled),
  }
}


export function dataCloudflareSchemaValidationSchemasFilterToHclTerraform(struct?: DataCloudflareSchemaValidationSchemasFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    omit_source: {
      value: cdktf.booleanToHclTerraform(struct!.omitSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.validationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareSchemaValidationSchemasFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareSchemaValidationSchemasFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._omitSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitSource = this._omitSource;
    }
    if (this._validationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationEnabled = this._validationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareSchemaValidationSchemasFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._omitSource = undefined;
      this._validationEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._omitSource = value.omitSource;
      this._validationEnabled = value.validationEnabled;
    }
  }

  // omit_source - computed: true, optional: true, required: false
  private _omitSource?: boolean | cdktf.IResolvable; 
  public get omitSource() {
    return this.getBooleanAttribute('omit_source');
  }
  public set omitSource(value: boolean | cdktf.IResolvable) {
    this._omitSource = value;
  }
  public resetOmitSource() {
    this._omitSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitSourceInput() {
    return this._omitSource;
  }

  // validation_enabled - computed: false, optional: true, required: false
  private _validationEnabled?: boolean | cdktf.IResolvable; 
  public get validationEnabled() {
    return this.getBooleanAttribute('validation_enabled');
  }
  public set validationEnabled(value: boolean | cdktf.IResolvable) {
    this._validationEnabled = value;
  }
  public resetValidationEnabled() {
    this._validationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationEnabledInput() {
    return this._validationEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas cloudflare_schema_validation_schemas}
*/
export class DataCloudflareSchemaValidationSchemas extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_schema_validation_schemas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareSchemaValidationSchemas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareSchemaValidationSchemas to import
  * @param importFromId The id of the existing DataCloudflareSchemaValidationSchemas that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareSchemaValidationSchemas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_schema_validation_schemas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas cloudflare_schema_validation_schemas} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareSchemaValidationSchemasConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareSchemaValidationSchemasConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_schema_validation_schemas',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.0',
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
    this._filter.internalValue = config.filter;
    this._omitSource = config.omitSource;
    this._schemaId = config.schemaId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareSchemaValidationSchemasFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareSchemaValidationSchemasFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // omit_source - computed: true, optional: true, required: false
  private _omitSource?: boolean | cdktf.IResolvable; 
  public get omitSource() {
    return this.getBooleanAttribute('omit_source');
  }
  public set omitSource(value: boolean | cdktf.IResolvable) {
    this._omitSource = value;
  }
  public resetOmitSource() {
    this._omitSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitSourceInput() {
    return this._omitSource;
  }

  // schema_id - computed: true, optional: true, required: false
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

  // validation_enabled - computed: true, optional: false, required: false
  public get validationEnabled() {
    return this.getBooleanAttribute('validation_enabled');
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
      filter: dataCloudflareSchemaValidationSchemasFilterToTerraform(this._filter.internalValue),
      omit_source: cdktf.booleanToTerraform(this._omitSource),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataCloudflareSchemaValidationSchemasFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareSchemaValidationSchemasFilter",
      },
      omit_source: {
        value: cdktf.booleanToHclTerraform(this._omitSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
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
