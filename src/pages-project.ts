// https://www.terraform.io/docs/providers/cloudflare/r/pages_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PagesProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#account_id PagesProject#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#id PagesProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#name PagesProject#name}
  */
  readonly name: string;
  /**
  * The name of the branch that is used for the production environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#production_branch PagesProject#production_branch}
  */
  readonly productionBranch: string;
  /**
  * build_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#build_config PagesProject#build_config}
  */
  readonly buildConfig?: PagesProjectBuildConfig;
  /**
  * deployment_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#deployment_configs PagesProject#deployment_configs}
  */
  readonly deploymentConfigs?: PagesProjectDeploymentConfigs;
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#source PagesProject#source}
  */
  readonly source?: PagesProjectSource;
}
export interface PagesProjectBuildConfig {
  /**
  * Command used to build project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#build_command PagesProject#build_command}
  */
  readonly buildCommand?: string;
  /**
  * Output directory of the build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#destination_dir PagesProject#destination_dir}
  */
  readonly destinationDir?: string;
  /**
  * Directory to run the command.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#root_dir PagesProject#root_dir}
  */
  readonly rootDir?: string;
  /**
  * The classifying tag for analytics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#web_analytics_tag PagesProject#web_analytics_tag}
  */
  readonly webAnalyticsTag?: string;
  /**
  * The auth token for analytics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#web_analytics_token PagesProject#web_analytics_token}
  */
  readonly webAnalyticsToken?: string;
}

export function pagesProjectBuildConfigToTerraform(struct?: PagesProjectBuildConfigOutputReference | PagesProjectBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    destination_dir: cdktf.stringToTerraform(struct!.destinationDir),
    root_dir: cdktf.stringToTerraform(struct!.rootDir),
    web_analytics_tag: cdktf.stringToTerraform(struct!.webAnalyticsTag),
    web_analytics_token: cdktf.stringToTerraform(struct!.webAnalyticsToken),
  }
}

export class PagesProjectBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagesProjectBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildCommand = this._buildCommand;
    }
    if (this._destinationDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDir = this._destinationDir;
    }
    if (this._rootDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDir = this._rootDir;
    }
    if (this._webAnalyticsTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAnalyticsTag = this._webAnalyticsTag;
    }
    if (this._webAnalyticsToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAnalyticsToken = this._webAnalyticsToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildCommand = undefined;
      this._destinationDir = undefined;
      this._rootDir = undefined;
      this._webAnalyticsTag = undefined;
      this._webAnalyticsToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildCommand = value.buildCommand;
      this._destinationDir = value.destinationDir;
      this._rootDir = value.rootDir;
      this._webAnalyticsTag = value.webAnalyticsTag;
      this._webAnalyticsToken = value.webAnalyticsToken;
    }
  }

  // build_command - computed: false, optional: true, required: false
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  public resetBuildCommand() {
    this._buildCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // destination_dir - computed: false, optional: true, required: false
  private _destinationDir?: string; 
  public get destinationDir() {
    return this.getStringAttribute('destination_dir');
  }
  public set destinationDir(value: string) {
    this._destinationDir = value;
  }
  public resetDestinationDir() {
    this._destinationDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDirInput() {
    return this._destinationDir;
  }

  // root_dir - computed: false, optional: true, required: false
  private _rootDir?: string; 
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }
  public set rootDir(value: string) {
    this._rootDir = value;
  }
  public resetRootDir() {
    this._rootDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirInput() {
    return this._rootDir;
  }

  // web_analytics_tag - computed: false, optional: true, required: false
  private _webAnalyticsTag?: string; 
  public get webAnalyticsTag() {
    return this.getStringAttribute('web_analytics_tag');
  }
  public set webAnalyticsTag(value: string) {
    this._webAnalyticsTag = value;
  }
  public resetWebAnalyticsTag() {
    this._webAnalyticsTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAnalyticsTagInput() {
    return this._webAnalyticsTag;
  }

  // web_analytics_token - computed: false, optional: true, required: false
  private _webAnalyticsToken?: string; 
  public get webAnalyticsToken() {
    return this.getStringAttribute('web_analytics_token');
  }
  public set webAnalyticsToken(value: string) {
    this._webAnalyticsToken = value;
  }
  public resetWebAnalyticsToken() {
    this._webAnalyticsToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAnalyticsTokenInput() {
    return this._webAnalyticsToken;
  }
}
export interface PagesProjectDeploymentConfigsPreview {
  /**
  * Compatibility date used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#compatibility_date PagesProject#compatibility_date}
  */
  readonly compatibilityDate?: string;
  /**
  * Compatibility flags used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#compatibility_flags PagesProject#compatibility_flags}
  */
  readonly compatibilityFlags?: string[];
  /**
  * D1 Databases used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#d1_databases PagesProject#d1_databases}
  */
  readonly d1Databases?: { [key: string]: string };
  /**
  * Durable Object namespaces used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}
  */
  readonly durableObjectNamespaces?: { [key: string]: string };
  /**
  * Environment variables for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#environment_variables PagesProject#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * KV namespaces used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#kv_namespaces PagesProject#kv_namespaces}
  */
  readonly kvNamespaces?: { [key: string]: string };
  /**
  * R2 Buckets used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#r2_buckets PagesProject#r2_buckets}
  */
  readonly r2Buckets?: { [key: string]: string };
}

export function pagesProjectDeploymentConfigsPreviewToTerraform(struct?: PagesProjectDeploymentConfigsPreviewOutputReference | PagesProjectDeploymentConfigsPreview): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compatibility_date: cdktf.stringToTerraform(struct!.compatibilityDate),
    compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compatibilityFlags),
    d1_databases: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.d1Databases),
    durable_object_namespaces: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.durableObjectNamespaces),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    kv_namespaces: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kvNamespaces),
    r2_buckets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.r2Buckets),
  }
}

export class PagesProjectDeploymentConfigsPreviewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreview | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compatibilityDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityDate = this._compatibilityDate;
    }
    if (this._compatibilityFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityFlags = this._compatibilityFlags;
    }
    if (this._d1Databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.d1Databases = this._d1Databases;
    }
    if (this._durableObjectNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.durableObjectNamespaces = this._durableObjectNamespaces;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._kvNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.kvNamespaces = this._kvNamespaces;
    }
    if (this._r2Buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.r2Buckets = this._r2Buckets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreview | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compatibilityDate = undefined;
      this._compatibilityFlags = undefined;
      this._d1Databases = undefined;
      this._durableObjectNamespaces = undefined;
      this._environmentVariables = undefined;
      this._kvNamespaces = undefined;
      this._r2Buckets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compatibilityDate = value.compatibilityDate;
      this._compatibilityFlags = value.compatibilityFlags;
      this._d1Databases = value.d1Databases;
      this._durableObjectNamespaces = value.durableObjectNamespaces;
      this._environmentVariables = value.environmentVariables;
      this._kvNamespaces = value.kvNamespaces;
      this._r2Buckets = value.r2Buckets;
    }
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
    return this.getListAttribute('compatibility_flags');
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

  // d1_databases - computed: false, optional: true, required: false
  private _d1Databases?: { [key: string]: string }; 
  public get d1Databases() {
    return this.getStringMapAttribute('d1_databases');
  }
  public set d1Databases(value: { [key: string]: string }) {
    this._d1Databases = value;
  }
  public resetD1Databases() {
    this._d1Databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get d1DatabasesInput() {
    return this._d1Databases;
  }

  // durable_object_namespaces - computed: false, optional: true, required: false
  private _durableObjectNamespaces?: { [key: string]: string }; 
  public get durableObjectNamespaces() {
    return this.getStringMapAttribute('durable_object_namespaces');
  }
  public set durableObjectNamespaces(value: { [key: string]: string }) {
    this._durableObjectNamespaces = value;
  }
  public resetDurableObjectNamespaces() {
    this._durableObjectNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durableObjectNamespacesInput() {
    return this._durableObjectNamespaces;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // kv_namespaces - computed: false, optional: true, required: false
  private _kvNamespaces?: { [key: string]: string }; 
  public get kvNamespaces() {
    return this.getStringMapAttribute('kv_namespaces');
  }
  public set kvNamespaces(value: { [key: string]: string }) {
    this._kvNamespaces = value;
  }
  public resetKvNamespaces() {
    this._kvNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvNamespacesInput() {
    return this._kvNamespaces;
  }

  // r2_buckets - computed: false, optional: true, required: false
  private _r2Buckets?: { [key: string]: string }; 
  public get r2Buckets() {
    return this.getStringMapAttribute('r2_buckets');
  }
  public set r2Buckets(value: { [key: string]: string }) {
    this._r2Buckets = value;
  }
  public resetR2Buckets() {
    this._r2Buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r2BucketsInput() {
    return this._r2Buckets;
  }
}
export interface PagesProjectDeploymentConfigsProduction {
  /**
  * Compatibility date used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#compatibility_date PagesProject#compatibility_date}
  */
  readonly compatibilityDate?: string;
  /**
  * Compatibility flags used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#compatibility_flags PagesProject#compatibility_flags}
  */
  readonly compatibilityFlags?: string[];
  /**
  * D1 Databases used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#d1_databases PagesProject#d1_databases}
  */
  readonly d1Databases?: { [key: string]: string };
  /**
  * Durable Object namespaces used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}
  */
  readonly durableObjectNamespaces?: { [key: string]: string };
  /**
  * Environment variables for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#environment_variables PagesProject#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * KV namespaces used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#kv_namespaces PagesProject#kv_namespaces}
  */
  readonly kvNamespaces?: { [key: string]: string };
  /**
  * R2 Buckets used for Pages Functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#r2_buckets PagesProject#r2_buckets}
  */
  readonly r2Buckets?: { [key: string]: string };
}

export function pagesProjectDeploymentConfigsProductionToTerraform(struct?: PagesProjectDeploymentConfigsProductionOutputReference | PagesProjectDeploymentConfigsProduction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compatibility_date: cdktf.stringToTerraform(struct!.compatibilityDate),
    compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compatibilityFlags),
    d1_databases: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.d1Databases),
    durable_object_namespaces: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.durableObjectNamespaces),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    kv_namespaces: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kvNamespaces),
    r2_buckets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.r2Buckets),
  }
}

export class PagesProjectDeploymentConfigsProductionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProduction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compatibilityDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityDate = this._compatibilityDate;
    }
    if (this._compatibilityFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityFlags = this._compatibilityFlags;
    }
    if (this._d1Databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.d1Databases = this._d1Databases;
    }
    if (this._durableObjectNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.durableObjectNamespaces = this._durableObjectNamespaces;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._kvNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.kvNamespaces = this._kvNamespaces;
    }
    if (this._r2Buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.r2Buckets = this._r2Buckets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProduction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compatibilityDate = undefined;
      this._compatibilityFlags = undefined;
      this._d1Databases = undefined;
      this._durableObjectNamespaces = undefined;
      this._environmentVariables = undefined;
      this._kvNamespaces = undefined;
      this._r2Buckets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compatibilityDate = value.compatibilityDate;
      this._compatibilityFlags = value.compatibilityFlags;
      this._d1Databases = value.d1Databases;
      this._durableObjectNamespaces = value.durableObjectNamespaces;
      this._environmentVariables = value.environmentVariables;
      this._kvNamespaces = value.kvNamespaces;
      this._r2Buckets = value.r2Buckets;
    }
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
    return this.getListAttribute('compatibility_flags');
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

  // d1_databases - computed: false, optional: true, required: false
  private _d1Databases?: { [key: string]: string }; 
  public get d1Databases() {
    return this.getStringMapAttribute('d1_databases');
  }
  public set d1Databases(value: { [key: string]: string }) {
    this._d1Databases = value;
  }
  public resetD1Databases() {
    this._d1Databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get d1DatabasesInput() {
    return this._d1Databases;
  }

  // durable_object_namespaces - computed: false, optional: true, required: false
  private _durableObjectNamespaces?: { [key: string]: string }; 
  public get durableObjectNamespaces() {
    return this.getStringMapAttribute('durable_object_namespaces');
  }
  public set durableObjectNamespaces(value: { [key: string]: string }) {
    this._durableObjectNamespaces = value;
  }
  public resetDurableObjectNamespaces() {
    this._durableObjectNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durableObjectNamespacesInput() {
    return this._durableObjectNamespaces;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // kv_namespaces - computed: false, optional: true, required: false
  private _kvNamespaces?: { [key: string]: string }; 
  public get kvNamespaces() {
    return this.getStringMapAttribute('kv_namespaces');
  }
  public set kvNamespaces(value: { [key: string]: string }) {
    this._kvNamespaces = value;
  }
  public resetKvNamespaces() {
    this._kvNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvNamespacesInput() {
    return this._kvNamespaces;
  }

  // r2_buckets - computed: false, optional: true, required: false
  private _r2Buckets?: { [key: string]: string }; 
  public get r2Buckets() {
    return this.getStringMapAttribute('r2_buckets');
  }
  public set r2Buckets(value: { [key: string]: string }) {
    this._r2Buckets = value;
  }
  public resetR2Buckets() {
    this._r2Buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r2BucketsInput() {
    return this._r2Buckets;
  }
}
export interface PagesProjectDeploymentConfigs {
  /**
  * preview block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#preview PagesProject#preview}
  */
  readonly preview?: PagesProjectDeploymentConfigsPreview;
  /**
  * production block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#production PagesProject#production}
  */
  readonly production?: PagesProjectDeploymentConfigsProduction;
}

export function pagesProjectDeploymentConfigsToTerraform(struct?: PagesProjectDeploymentConfigsOutputReference | PagesProjectDeploymentConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preview: pagesProjectDeploymentConfigsPreviewToTerraform(struct!.preview),
    production: pagesProjectDeploymentConfigsProductionToTerraform(struct!.production),
  }
}

export class PagesProjectDeploymentConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagesProjectDeploymentConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preview?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preview = this._preview?.internalValue;
    }
    if (this._production?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.production = this._production?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preview.internalValue = undefined;
      this._production.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preview.internalValue = value.preview;
      this._production.internalValue = value.production;
    }
  }

  // preview - computed: false, optional: true, required: false
  private _preview = new PagesProjectDeploymentConfigsPreviewOutputReference(this, "preview");
  public get preview() {
    return this._preview;
  }
  public putPreview(value: PagesProjectDeploymentConfigsPreview) {
    this._preview.internalValue = value;
  }
  public resetPreview() {
    this._preview.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview.internalValue;
  }

  // production - computed: false, optional: true, required: false
  private _production = new PagesProjectDeploymentConfigsProductionOutputReference(this, "production");
  public get production() {
    return this._production;
  }
  public putProduction(value: PagesProjectDeploymentConfigsProduction) {
    this._production.internalValue = value;
  }
  public resetProduction() {
    this._production.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionInput() {
    return this._production.internalValue;
  }
}
export interface PagesProjectSourceConfig {
  /**
  * Toggle deployments on this repo.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#deployments_enabled PagesProject#deployments_enabled}
  */
  readonly deploymentsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Project owner username.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#owner PagesProject#owner}
  */
  readonly owner?: string;
  /**
  * Enable Pages to comment on Pull Requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#pr_comments_enabled PagesProject#pr_comments_enabled}
  */
  readonly prCommentsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Branches will be excluded from automatic deployment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#preview_branch_excludes PagesProject#preview_branch_excludes}
  */
  readonly previewBranchExcludes?: string[];
  /**
  * Branches will be included for automatic deployment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#preview_branch_includes PagesProject#preview_branch_includes}
  */
  readonly previewBranchIncludes?: string[];
  /**
  * Preview Deployment Setting.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#preview_deployment_setting PagesProject#preview_deployment_setting}
  */
  readonly previewDeploymentSetting?: string;
  /**
  * Project production branch name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#production_branch PagesProject#production_branch}
  */
  readonly productionBranch: string;
  /**
  * Enable production deployments.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#production_deployment_enabled PagesProject#production_deployment_enabled}
  */
  readonly productionDeploymentEnabled?: boolean | cdktf.IResolvable;
  /**
  * Project repository name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#repo_name PagesProject#repo_name}
  */
  readonly repoName?: string;
}

export function pagesProjectSourceConfigToTerraform(struct?: PagesProjectSourceConfigOutputReference | PagesProjectSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployments_enabled: cdktf.booleanToTerraform(struct!.deploymentsEnabled),
    owner: cdktf.stringToTerraform(struct!.owner),
    pr_comments_enabled: cdktf.booleanToTerraform(struct!.prCommentsEnabled),
    preview_branch_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previewBranchExcludes),
    preview_branch_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previewBranchIncludes),
    preview_deployment_setting: cdktf.stringToTerraform(struct!.previewDeploymentSetting),
    production_branch: cdktf.stringToTerraform(struct!.productionBranch),
    production_deployment_enabled: cdktf.booleanToTerraform(struct!.productionDeploymentEnabled),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
  }
}

export class PagesProjectSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagesProjectSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentsEnabled = this._deploymentsEnabled;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._prCommentsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.prCommentsEnabled = this._prCommentsEnabled;
    }
    if (this._previewBranchExcludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewBranchExcludes = this._previewBranchExcludes;
    }
    if (this._previewBranchIncludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewBranchIncludes = this._previewBranchIncludes;
    }
    if (this._previewDeploymentSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewDeploymentSetting = this._previewDeploymentSetting;
    }
    if (this._productionBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.productionBranch = this._productionBranch;
    }
    if (this._productionDeploymentEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.productionDeploymentEnabled = this._productionDeploymentEnabled;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploymentsEnabled = undefined;
      this._owner = undefined;
      this._prCommentsEnabled = undefined;
      this._previewBranchExcludes = undefined;
      this._previewBranchIncludes = undefined;
      this._previewDeploymentSetting = undefined;
      this._productionBranch = undefined;
      this._productionDeploymentEnabled = undefined;
      this._repoName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploymentsEnabled = value.deploymentsEnabled;
      this._owner = value.owner;
      this._prCommentsEnabled = value.prCommentsEnabled;
      this._previewBranchExcludes = value.previewBranchExcludes;
      this._previewBranchIncludes = value.previewBranchIncludes;
      this._previewDeploymentSetting = value.previewDeploymentSetting;
      this._productionBranch = value.productionBranch;
      this._productionDeploymentEnabled = value.productionDeploymentEnabled;
      this._repoName = value.repoName;
    }
  }

  // deployments_enabled - computed: true, optional: true, required: false
  private _deploymentsEnabled?: boolean | cdktf.IResolvable; 
  public get deploymentsEnabled() {
    return this.getBooleanAttribute('deployments_enabled');
  }
  public set deploymentsEnabled(value: boolean | cdktf.IResolvable) {
    this._deploymentsEnabled = value;
  }
  public resetDeploymentsEnabled() {
    this._deploymentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentsEnabledInput() {
    return this._deploymentsEnabled;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // pr_comments_enabled - computed: true, optional: true, required: false
  private _prCommentsEnabled?: boolean | cdktf.IResolvable; 
  public get prCommentsEnabled() {
    return this.getBooleanAttribute('pr_comments_enabled');
  }
  public set prCommentsEnabled(value: boolean | cdktf.IResolvable) {
    this._prCommentsEnabled = value;
  }
  public resetPrCommentsEnabled() {
    this._prCommentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prCommentsEnabledInput() {
    return this._prCommentsEnabled;
  }

  // preview_branch_excludes - computed: false, optional: true, required: false
  private _previewBranchExcludes?: string[]; 
  public get previewBranchExcludes() {
    return this.getListAttribute('preview_branch_excludes');
  }
  public set previewBranchExcludes(value: string[]) {
    this._previewBranchExcludes = value;
  }
  public resetPreviewBranchExcludes() {
    this._previewBranchExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewBranchExcludesInput() {
    return this._previewBranchExcludes;
  }

  // preview_branch_includes - computed: false, optional: true, required: false
  private _previewBranchIncludes?: string[]; 
  public get previewBranchIncludes() {
    return this.getListAttribute('preview_branch_includes');
  }
  public set previewBranchIncludes(value: string[]) {
    this._previewBranchIncludes = value;
  }
  public resetPreviewBranchIncludes() {
    this._previewBranchIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewBranchIncludesInput() {
    return this._previewBranchIncludes;
  }

  // preview_deployment_setting - computed: false, optional: true, required: false
  private _previewDeploymentSetting?: string; 
  public get previewDeploymentSetting() {
    return this.getStringAttribute('preview_deployment_setting');
  }
  public set previewDeploymentSetting(value: string) {
    this._previewDeploymentSetting = value;
  }
  public resetPreviewDeploymentSetting() {
    this._previewDeploymentSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewDeploymentSettingInput() {
    return this._previewDeploymentSetting;
  }

  // production_branch - computed: false, optional: false, required: true
  private _productionBranch?: string; 
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }
  public set productionBranch(value: string) {
    this._productionBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionBranchInput() {
    return this._productionBranch;
  }

  // production_deployment_enabled - computed: true, optional: true, required: false
  private _productionDeploymentEnabled?: boolean | cdktf.IResolvable; 
  public get productionDeploymentEnabled() {
    return this.getBooleanAttribute('production_deployment_enabled');
  }
  public set productionDeploymentEnabled(value: boolean | cdktf.IResolvable) {
    this._productionDeploymentEnabled = value;
  }
  public resetProductionDeploymentEnabled() {
    this._productionDeploymentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionDeploymentEnabledInput() {
    return this._productionDeploymentEnabled;
  }

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }
}
export interface PagesProjectSource {
  /**
  * Project host type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#type PagesProject#type}
  */
  readonly type?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#config PagesProject#config}
  */
  readonly config?: PagesProjectSourceConfig;
}

export function pagesProjectSourceToTerraform(struct?: PagesProjectSourceOutputReference | PagesProjectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: pagesProjectSourceConfigToTerraform(struct!.config),
  }
}

export class PagesProjectSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagesProjectSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._config.internalValue = value.config;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // config - computed: false, optional: true, required: false
  private _config = new PagesProjectSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: PagesProjectSourceConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project cloudflare_pages_project}
*/
export class PagesProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_pages_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project cloudflare_pages_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PagesProjectConfig
  */
  public constructor(scope: Construct, id: string, config: PagesProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_pages_project',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.23.0',
        providerVersionConstraint: '~> 3.14'
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
    this._id = config.id;
    this._name = config.name;
    this._productionBranch = config.productionBranch;
    this._buildConfig.internalValue = config.buildConfig;
    this._deploymentConfigs.internalValue = config.deploymentConfigs;
    this._source.internalValue = config.source;
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

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getListAttribute('domains');
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

  // production_branch - computed: false, optional: false, required: true
  private _productionBranch?: string; 
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }
  public set productionBranch(value: string) {
    this._productionBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionBranchInput() {
    return this._productionBranch;
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // build_config - computed: false, optional: true, required: false
  private _buildConfig = new PagesProjectBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }
  public putBuildConfig(value: PagesProjectBuildConfig) {
    this._buildConfig.internalValue = value;
  }
  public resetBuildConfig() {
    this._buildConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildConfigInput() {
    return this._buildConfig.internalValue;
  }

  // deployment_configs - computed: false, optional: true, required: false
  private _deploymentConfigs = new PagesProjectDeploymentConfigsOutputReference(this, "deployment_configs");
  public get deploymentConfigs() {
    return this._deploymentConfigs;
  }
  public putDeploymentConfigs(value: PagesProjectDeploymentConfigs) {
    this._deploymentConfigs.internalValue = value;
  }
  public resetDeploymentConfigs() {
    this._deploymentConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigsInput() {
    return this._deploymentConfigs.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new PagesProjectSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: PagesProjectSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      production_branch: cdktf.stringToTerraform(this._productionBranch),
      build_config: pagesProjectBuildConfigToTerraform(this._buildConfig.internalValue),
      deployment_configs: pagesProjectDeploymentConfigsToTerraform(this._deploymentConfigs.internalValue),
      source: pagesProjectSourceToTerraform(this._source.internalValue),
    };
  }
}
