/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/d1_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface D1DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/d1_database#account_id D1Database#account_id}
  */
  readonly accountId: string;
  /**
  * D1 database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/d1_database#name D1Database#name}
  */
  readonly name: string;
  /**
  * Specify the region to create the D1 primary, if available. If this option is omitted, the D1 will be created as close as possible to the current user.
  * Available values: "wnam", "enam", "weur", "eeur", "apac", "oc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/d1_database#primary_location_hint D1Database#primary_location_hint}
  */
  readonly primaryLocationHint?: string;
  /**
  * Configuration for D1 read replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/d1_database#read_replication D1Database#read_replication}
  */
  readonly readReplication?: D1DatabaseReadReplication;
}
export interface D1DatabaseReadReplication {
  /**
  * The read replication mode for the database. Use 'auto' to create replicas and allow D1 automatically place them around the world, or 'disabled' to not use any database replicas (it can take a few hours for all replicas to be deleted).
  * Available values: "auto", "disabled".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/d1_database#mode D1Database#mode}
  */
  readonly mode: string;
}

export function d1DatabaseReadReplicationToTerraform(struct?: D1DatabaseReadReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function d1DatabaseReadReplicationToHclTerraform(struct?: D1DatabaseReadReplication | cdktf.IResolvable): any {
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

export class D1DatabaseReadReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): D1DatabaseReadReplication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: D1DatabaseReadReplication | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/d1_database cloudflare_d1_database}
*/
export class D1Database extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_d1_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a D1Database resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the D1Database to import
  * @param importFromId The id of the existing D1Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/d1_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the D1Database to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_d1_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/d1_database cloudflare_d1_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options D1DatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: D1DatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_d1_database',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._name = config.name;
    this._primaryLocationHint = config.primaryLocationHint;
    this._readReplication.internalValue = config.readReplication;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // file_size - computed: true, optional: false, required: false
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }

  // id - computed: true, optional: false, required: false
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

  // num_tables - computed: true, optional: false, required: false
  public get numTables() {
    return this.getNumberAttribute('num_tables');
  }

  // primary_location_hint - computed: false, optional: true, required: false
  private _primaryLocationHint?: string; 
  public get primaryLocationHint() {
    return this.getStringAttribute('primary_location_hint');
  }
  public set primaryLocationHint(value: string) {
    this._primaryLocationHint = value;
  }
  public resetPrimaryLocationHint() {
    this._primaryLocationHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryLocationHintInput() {
    return this._primaryLocationHint;
  }

  // read_replication - computed: false, optional: true, required: false
  private _readReplication = new D1DatabaseReadReplicationOutputReference(this, "read_replication");
  public get readReplication() {
    return this._readReplication;
  }
  public putReadReplication(value: D1DatabaseReadReplication) {
    this._readReplication.internalValue = value;
  }
  public resetReadReplication() {
    this._readReplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readReplicationInput() {
    return this._readReplication.internalValue;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
      primary_location_hint: cdktf.stringToTerraform(this._primaryLocationHint),
      read_replication: d1DatabaseReadReplicationToTerraform(this._readReplication.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_location_hint: {
        value: cdktf.stringToHclTerraform(this._primaryLocationHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_replication: {
        value: d1DatabaseReadReplicationToHclTerraform(this._readReplication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "D1DatabaseReadReplication",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
