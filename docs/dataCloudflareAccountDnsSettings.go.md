# `dataCloudflareAccountDnsSettings` Submodule <a name="`dataCloudflareAccountDnsSettings` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountDnsSettings <a name="DataCloudflareAccountDnsSettings" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/account_dns_settings cloudflare_account_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

datacloudflareaccountdnssettings.NewDataCloudflareAccountDnsSettings(scope Construct, id *string, config DataCloudflareAccountDnsSettingsConfig) DataCloudflareAccountDnsSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig">DataCloudflareAccountDnsSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig">DataCloudflareAccountDnsSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareAccountDnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

datacloudflareaccountdnssettings.DataCloudflareAccountDnsSettings_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

datacloudflareaccountdnssettings.DataCloudflareAccountDnsSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

datacloudflareaccountdnssettings.DataCloudflareAccountDnsSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

datacloudflareaccountdnssettings.DataCloudflareAccountDnsSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareAccountDnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareAccountDnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareAccountDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/account_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.zoneDefaults">ZoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ZoneDefaults`<sup>Required</sup> <a name="ZoneDefaults" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.zoneDefaults"></a>

```go
func ZoneDefaults() DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountDnsSettingsConfig <a name="DataCloudflareAccountDnsSettingsConfig" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

&datacloudflareaccountdnssettings.DataCloudflareAccountDnsSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/account_dns_settings#account_id DataCloudflareAccountDnsSettings#account_id}

---

### DataCloudflareAccountDnsSettingsZoneDefaults <a name="DataCloudflareAccountDnsSettingsZoneDefaults" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

&datacloudflareaccountdnssettings.DataCloudflareAccountDnsSettingsZoneDefaults {

}
```


### DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns <a name="DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

&datacloudflareaccountdnssettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns {

}
```


### DataCloudflareAccountDnsSettingsZoneDefaultsNameservers <a name="DataCloudflareAccountDnsSettingsZoneDefaultsNameservers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameservers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

&datacloudflareaccountdnssettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameservers {

}
```


### DataCloudflareAccountDnsSettingsZoneDefaultsSoa <a name="DataCloudflareAccountDnsSettingsZoneDefaultsSoa" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

&datacloudflareaccountdnssettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoa {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference <a name="DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

datacloudflareaccountdnssettings.NewDataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId">ReferenceZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns">DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferenceZoneId`<sup>Required</sup> <a name="ReferenceZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId"></a>

```go
func ReferenceZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns">DataCloudflareAccountDnsSettingsZoneDefaultsInternalDns</a>

---


### DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference <a name="DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

datacloudflareaccountdnssettings.NewDataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameservers">DataCloudflareAccountDnsSettingsZoneDefaultsNameservers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountDnsSettingsZoneDefaultsNameservers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameservers">DataCloudflareAccountDnsSettingsZoneDefaultsNameservers</a>

---


### DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference <a name="DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

datacloudflareaccountdnssettings.NewDataCloudflareAccountDnsSettingsZoneDefaultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns">FoundationDns</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider">MultiProvider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl">NsTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.soa">Soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode">ZoneMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaults">DataCloudflareAccountDnsSettingsZoneDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlattenAllCnames`<sup>Required</sup> <a name="FlattenAllCnames" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames"></a>

```go
func FlattenAllCnames() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FoundationDns`<sup>Required</sup> <a name="FoundationDns" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns"></a>

```go
func FoundationDns() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalDns`<sup>Required</sup> <a name="InternalDns" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.internalDns"></a>

```go
func InternalDns() DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a>

---

##### `MultiProvider`<sup>Required</sup> <a name="MultiProvider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider"></a>

```go
func MultiProvider() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.nameservers"></a>

```go
func Nameservers() DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference</a>

---

##### `NsTtl`<sup>Required</sup> <a name="NsTtl" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl"></a>

```go
func NsTtl() *f64
```

- *Type:* *f64

---

##### `SecondaryOverrides`<sup>Required</sup> <a name="SecondaryOverrides" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides"></a>

```go
func SecondaryOverrides() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.soa"></a>

```go
func Soa() DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference">DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference</a>

---

##### `ZoneMode`<sup>Required</sup> <a name="ZoneMode" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode"></a>

```go
func ZoneMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountDnsSettingsZoneDefaults
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaults">DataCloudflareAccountDnsSettingsZoneDefaults</a>

---


### DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference <a name="DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettings"

datacloudflareaccountdnssettings.NewDataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire">Expire</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl">MinTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname">Mname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh">Refresh</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry">Retry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname">Rname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoa">DataCloudflareAccountDnsSettingsZoneDefaultsSoa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire"></a>

```go
func Expire() *f64
```

- *Type:* *f64

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl"></a>

```go
func MinTtl() *f64
```

- *Type:* *f64

---

##### `Mname`<sup>Required</sup> <a name="Mname" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname"></a>

```go
func Mname() *string
```

- *Type:* *string

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh"></a>

```go
func Refresh() *f64
```

- *Type:* *f64

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry"></a>

```go
func Retry() *f64
```

- *Type:* *f64

---

##### `Rname`<sup>Required</sup> <a name="Rname" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname"></a>

```go
func Rname() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountDnsSettingsZoneDefaultsSoa
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettings.DataCloudflareAccountDnsSettingsZoneDefaultsSoa">DataCloudflareAccountDnsSettingsZoneDefaultsSoa</a>

---



