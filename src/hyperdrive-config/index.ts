/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HyperdriveConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Define configurations using a unique string identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#account_id HyperdriveConfig#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}
  */
  readonly caching?: HyperdriveConfigCaching;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#mtls HyperdriveConfig#mtls}
  */
  readonly mtls?: HyperdriveConfigMtls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#name HyperdriveConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}
  */
  readonly origin: HyperdriveConfigOrigin;
  /**
  * The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#origin_connection_limit HyperdriveConfig#origin_connection_limit}
  */
  readonly originConnectionLimit?: number;
}
export interface HyperdriveConfigCaching {
  /**
  * Set to true to disable caching of SQL responses. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#disabled HyperdriveConfig#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the maximum duration items should persist in the cache. Not returned if set to the default (60).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#max_age HyperdriveConfig#max_age}
  */
  readonly maxAge?: number;
  /**
  * Specify the number of seconds the cache may serve a stale response. Omitted if set to the default (15).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#stale_while_revalidate HyperdriveConfig#stale_while_revalidate}
  */
  readonly staleWhileRevalidate?: number;
}

export function hyperdriveConfigCachingToTerraform(struct?: HyperdriveConfigCaching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    stale_while_revalidate: cdktf.numberToTerraform(struct!.staleWhileRevalidate),
  }
}


export function hyperdriveConfigCachingToHclTerraform(struct?: HyperdriveConfigCaching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stale_while_revalidate: {
      value: cdktf.numberToHclTerraform(struct!.staleWhileRevalidate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HyperdriveConfigCachingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HyperdriveConfigCaching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._staleWhileRevalidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleWhileRevalidate = this._staleWhileRevalidate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HyperdriveConfigCaching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._maxAge = undefined;
      this._staleWhileRevalidate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._maxAge = value.maxAge;
      this._staleWhileRevalidate = value.staleWhileRevalidate;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // stale_while_revalidate - computed: false, optional: true, required: false
  private _staleWhileRevalidate?: number; 
  public get staleWhileRevalidate() {
    return this.getNumberAttribute('stale_while_revalidate');
  }
  public set staleWhileRevalidate(value: number) {
    this._staleWhileRevalidate = value;
  }
  public resetStaleWhileRevalidate() {
    this._staleWhileRevalidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleWhileRevalidateInput() {
    return this._staleWhileRevalidate;
  }
}
export interface HyperdriveConfigMtls {
  /**
  * Define CA certificate ID obtained after uploading CA cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#ca_certificate_id HyperdriveConfig#ca_certificate_id}
  */
  readonly caCertificateId?: string;
  /**
  * Define mTLS certificate ID obtained after uploading client cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#mtls_certificate_id HyperdriveConfig#mtls_certificate_id}
  */
  readonly mtlsCertificateId?: string;
  /**
  * Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#sslmode HyperdriveConfig#sslmode}
  */
  readonly sslmode?: string;
}

export function hyperdriveConfigMtlsToTerraform(struct?: HyperdriveConfigMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate_id: cdktf.stringToTerraform(struct!.caCertificateId),
    mtls_certificate_id: cdktf.stringToTerraform(struct!.mtlsCertificateId),
    sslmode: cdktf.stringToTerraform(struct!.sslmode),
  }
}


export function hyperdriveConfigMtlsToHclTerraform(struct?: HyperdriveConfigMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.caCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.mtlsCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslmode: {
      value: cdktf.stringToHclTerraform(struct!.sslmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HyperdriveConfigMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HyperdriveConfigMtls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateId = this._caCertificateId;
    }
    if (this._mtlsCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsCertificateId = this._mtlsCertificateId;
    }
    if (this._sslmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslmode = this._sslmode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HyperdriveConfigMtls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificateId = undefined;
      this._mtlsCertificateId = undefined;
      this._sslmode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificateId = value.caCertificateId;
      this._mtlsCertificateId = value.mtlsCertificateId;
      this._sslmode = value.sslmode;
    }
  }

  // ca_certificate_id - computed: false, optional: true, required: false
  private _caCertificateId?: string; 
  public get caCertificateId() {
    return this.getStringAttribute('ca_certificate_id');
  }
  public set caCertificateId(value: string) {
    this._caCertificateId = value;
  }
  public resetCaCertificateId() {
    this._caCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdInput() {
    return this._caCertificateId;
  }

  // mtls_certificate_id - computed: false, optional: true, required: false
  private _mtlsCertificateId?: string; 
  public get mtlsCertificateId() {
    return this.getStringAttribute('mtls_certificate_id');
  }
  public set mtlsCertificateId(value: string) {
    this._mtlsCertificateId = value;
  }
  public resetMtlsCertificateId() {
    this._mtlsCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsCertificateIdInput() {
    return this._mtlsCertificateId;
  }

  // sslmode - computed: false, optional: true, required: false
  private _sslmode?: string; 
  public get sslmode() {
    return this.getStringAttribute('sslmode');
  }
  public set sslmode(value: string) {
    this._sslmode = value;
  }
  public resetSslmode() {
    this._sslmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslmodeInput() {
    return this._sslmode;
  }
}
export interface HyperdriveConfigOrigin {
  /**
  * Defines the Client ID of the Access token to use when connecting to the origin database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#access_client_id HyperdriveConfig#access_client_id}
  */
  readonly accessClientId?: string;
  /**
  * Defines the Client Secret of the Access Token to use when connecting to the origin database. The API never returns this write-only value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#access_client_secret HyperdriveConfig#access_client_secret}
  */
  readonly accessClientSecret?: string;
  /**
  * Set the name of your origin database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#database HyperdriveConfig#database}
  */
  readonly database: string;
  /**
  * Defines the host (hostname or IP) of your origin database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#host HyperdriveConfig#host}
  */
  readonly host: string;
  /**
  * Set the password needed to access your origin database. The API never returns this write-only value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#password HyperdriveConfig#password}
  */
  readonly password: string;
  /**
  * Defines the port (default: 5432 for Postgres) of your origin database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#port HyperdriveConfig#port}
  */
  readonly port?: number;
  /**
  * Specifies the URL scheme used to connect to your origin database.
  * Available values: "postgres", "postgresql", "mysql".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#scheme HyperdriveConfig#scheme}
  */
  readonly scheme: string;
  /**
  * Set the user of your origin database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#user HyperdriveConfig#user}
  */
  readonly user: string;
}

export function hyperdriveConfigOriginToTerraform(struct?: HyperdriveConfigOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_client_id: cdktf.stringToTerraform(struct!.accessClientId),
    access_client_secret: cdktf.stringToTerraform(struct!.accessClientSecret),
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function hyperdriveConfigOriginToHclTerraform(struct?: HyperdriveConfigOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_client_id: {
      value: cdktf.stringToHclTerraform(struct!.accessClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.accessClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HyperdriveConfigOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HyperdriveConfigOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessClientId = this._accessClientId;
    }
    if (this._accessClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessClientSecret = this._accessClientSecret;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HyperdriveConfigOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessClientId = undefined;
      this._accessClientSecret = undefined;
      this._database = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessClientId = value.accessClientId;
      this._accessClientSecret = value.accessClientSecret;
      this._database = value.database;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._scheme = value.scheme;
      this._user = value.user;
    }
  }

  // access_client_id - computed: false, optional: true, required: false
  private _accessClientId?: string; 
  public get accessClientId() {
    return this.getStringAttribute('access_client_id');
  }
  public set accessClientId(value: string) {
    this._accessClientId = value;
  }
  public resetAccessClientId() {
    this._accessClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessClientIdInput() {
    return this._accessClientId;
  }

  // access_client_secret - computed: false, optional: true, required: false
  private _accessClientSecret?: string; 
  public get accessClientSecret() {
    return this.getStringAttribute('access_client_secret');
  }
  public set accessClientSecret(value: string) {
    this._accessClientSecret = value;
  }
  public resetAccessClientSecret() {
    this._accessClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessClientSecretInput() {
    return this._accessClientSecret;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: false, required: true
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config cloudflare_hyperdrive_config}
*/
export class HyperdriveConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_hyperdrive_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HyperdriveConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HyperdriveConfig to import
  * @param importFromId The id of the existing HyperdriveConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HyperdriveConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_hyperdrive_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/hyperdrive_config cloudflare_hyperdrive_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HyperdriveConfigConfig
  */
  public constructor(scope: Construct, id: string, config: HyperdriveConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_hyperdrive_config',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.9.0',
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
    this._caching.internalValue = config.caching;
    this._mtls.internalValue = config.mtls;
    this._name = config.name;
    this._origin.internalValue = config.origin;
    this._originConnectionLimit = config.originConnectionLimit;
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

  // caching - computed: false, optional: true, required: false
  private _caching = new HyperdriveConfigCachingOutputReference(this, "caching");
  public get caching() {
    return this._caching;
  }
  public putCaching(value: HyperdriveConfigCaching) {
    this._caching.internalValue = value;
  }
  public resetCaching() {
    this._caching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching.internalValue;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // mtls - computed: false, optional: true, required: false
  private _mtls = new HyperdriveConfigMtlsOutputReference(this, "mtls");
  public get mtls() {
    return this._mtls;
  }
  public putMtls(value: HyperdriveConfigMtls) {
    this._mtls.internalValue = value;
  }
  public resetMtls() {
    this._mtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsInput() {
    return this._mtls.internalValue;
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

  // origin - computed: false, optional: false, required: true
  private _origin = new HyperdriveConfigOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: HyperdriveConfigOrigin) {
    this._origin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // origin_connection_limit - computed: false, optional: true, required: false
  private _originConnectionLimit?: number; 
  public get originConnectionLimit() {
    return this.getNumberAttribute('origin_connection_limit');
  }
  public set originConnectionLimit(value: number) {
    this._originConnectionLimit = value;
  }
  public resetOriginConnectionLimit() {
    this._originConnectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originConnectionLimitInput() {
    return this._originConnectionLimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      caching: hyperdriveConfigCachingToTerraform(this._caching.internalValue),
      mtls: hyperdriveConfigMtlsToTerraform(this._mtls.internalValue),
      name: cdktf.stringToTerraform(this._name),
      origin: hyperdriveConfigOriginToTerraform(this._origin.internalValue),
      origin_connection_limit: cdktf.numberToTerraform(this._originConnectionLimit),
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
      caching: {
        value: hyperdriveConfigCachingToHclTerraform(this._caching.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HyperdriveConfigCaching",
      },
      mtls: {
        value: hyperdriveConfigMtlsToHclTerraform(this._mtls.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HyperdriveConfigMtls",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: hyperdriveConfigOriginToHclTerraform(this._origin.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HyperdriveConfigOrigin",
      },
      origin_connection_limit: {
        value: cdktf.numberToHclTerraform(this._originConnectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
