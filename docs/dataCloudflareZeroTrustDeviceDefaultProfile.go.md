# `dataCloudflareZeroTrustDeviceDefaultProfile` Submodule <a name="`dataCloudflareZeroTrustDeviceDefaultProfile` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceDefaultProfile <a name="DataCloudflareZeroTrustDeviceDefaultProfile" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.NewDataCloudflareZeroTrustDeviceDefaultProfile(scope Construct, id *string, config DataCloudflareZeroTrustDeviceDefaultProfileConfig) DataCloudflareZeroTrustDeviceDefaultProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig">DataCloudflareZeroTrustDeviceDefaultProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig">DataCloudflareZeroTrustDeviceDefaultProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.DataCloudflareZeroTrustDeviceDefaultProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.DataCloudflareZeroTrustDeviceDefaultProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.DataCloudflareZeroTrustDeviceDefaultProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.DataCloudflareZeroTrustDeviceDefaultProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceDefaultProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustDeviceDefaultProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_device_default_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceDefaultProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowedToLeave">AllowedToLeave</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowUpdates">AllowUpdates</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.autoConnect">AutoConnect</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.captivePortal">CaptivePortal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.exclude">Exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList">DataCloudflareZeroTrustDeviceDefaultProfileExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.fallbackDomains">FallbackDomains</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList">DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.gatewayUniqueId">GatewayUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.include">Include</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList">DataCloudflareZeroTrustDeviceDefaultProfileIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDns">RegisterInterfaceIpWithDns</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.serviceModeV2">ServiceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.switchLocked">SwitchLocked</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.tunnelProtocol">TunnelProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllowedToLeave`<sup>Required</sup> <a name="AllowedToLeave" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowedToLeave"></a>

```go
func AllowedToLeave() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AllowModeSwitch`<sup>Required</sup> <a name="AllowModeSwitch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowModeSwitch"></a>

```go
func AllowModeSwitch() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AllowUpdates`<sup>Required</sup> <a name="AllowUpdates" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowUpdates"></a>

```go
func AllowUpdates() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoConnect`<sup>Required</sup> <a name="AutoConnect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.autoConnect"></a>

```go
func AutoConnect() *f64
```

- *Type:* *f64

---

##### `CaptivePortal`<sup>Required</sup> <a name="CaptivePortal" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.captivePortal"></a>

```go
func CaptivePortal() *f64
```

- *Type:* *f64

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisableAutoFallback`<sup>Required</sup> <a name="DisableAutoFallback" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.disableAutoFallback"></a>

```go
func DisableAutoFallback() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.exclude"></a>

```go
func Exclude() DataCloudflareZeroTrustDeviceDefaultProfileExcludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList">DataCloudflareZeroTrustDeviceDefaultProfileExcludeList</a>

---

##### `ExcludeOfficeIps`<sup>Required</sup> <a name="ExcludeOfficeIps" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.excludeOfficeIps"></a>

```go
func ExcludeOfficeIps() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FallbackDomains`<sup>Required</sup> <a name="FallbackDomains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.fallbackDomains"></a>

```go
func FallbackDomains() DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList">DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList</a>

---

##### `GatewayUniqueId`<sup>Required</sup> <a name="GatewayUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.gatewayUniqueId"></a>

```go
func GatewayUniqueId() *string
```

- *Type:* *string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.include"></a>

```go
func Include() DataCloudflareZeroTrustDeviceDefaultProfileIncludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList">DataCloudflareZeroTrustDeviceDefaultProfileIncludeList</a>

---

##### `RegisterInterfaceIpWithDns`<sup>Required</sup> <a name="RegisterInterfaceIpWithDns" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDns"></a>

```go
func RegisterInterfaceIpWithDns() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServiceModeV2`<sup>Required</sup> <a name="ServiceModeV2" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.serviceModeV2"></a>

```go
func ServiceModeV2() DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a>

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.supportUrl"></a>

```go
func SupportUrl() *string
```

- *Type:* *string

---

##### `SwitchLocked`<sup>Required</sup> <a name="SwitchLocked" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.switchLocked"></a>

```go
func SwitchLocked() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TunnelProtocol`<sup>Required</sup> <a name="TunnelProtocol" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.tunnelProtocol"></a>

```go
func TunnelProtocol() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceDefaultProfileConfig <a name="DataCloudflareZeroTrustDeviceDefaultProfileConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

&datacloudflarezerotrustdevicedefaultprofile.DataCloudflareZeroTrustDeviceDefaultProfileConfig {
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_device_default_profile#account_id DataCloudflareZeroTrustDeviceDefaultProfile#account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_device_default_profile#account_id DataCloudflareZeroTrustDeviceDefaultProfile#account_id}.

---

### DataCloudflareZeroTrustDeviceDefaultProfileExclude <a name="DataCloudflareZeroTrustDeviceDefaultProfileExclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

&datacloudflarezerotrustdevicedefaultprofile.DataCloudflareZeroTrustDeviceDefaultProfileExclude {

}
```


### DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains <a name="DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

&datacloudflarezerotrustdevicedefaultprofile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains {

}
```


### DataCloudflareZeroTrustDeviceDefaultProfileInclude <a name="DataCloudflareZeroTrustDeviceDefaultProfileInclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileInclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

&datacloudflarezerotrustdevicedefaultprofile.DataCloudflareZeroTrustDeviceDefaultProfileInclude {

}
```


### DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2 <a name="DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

&datacloudflarezerotrustdevicedefaultprofile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2 {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceDefaultProfileExcludeList <a name="DataCloudflareZeroTrustDeviceDefaultProfileExcludeList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.NewDataCloudflareZeroTrustDeviceDefaultProfileExcludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDeviceDefaultProfileExcludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference <a name="DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.NewDataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExclude">DataCloudflareZeroTrustDeviceDefaultProfileExclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDeviceDefaultProfileExclude
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExclude">DataCloudflareZeroTrustDeviceDefaultProfileExclude</a>

---


### DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList <a name="DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.NewDataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference <a name="DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.NewDataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer">DnsServer</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains">DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer"></a>

```go
func DnsServer() *[]*string
```

- *Type:* *[]*string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains">DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains</a>

---


### DataCloudflareZeroTrustDeviceDefaultProfileIncludeList <a name="DataCloudflareZeroTrustDeviceDefaultProfileIncludeList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.NewDataCloudflareZeroTrustDeviceDefaultProfileIncludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDeviceDefaultProfileIncludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference <a name="DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.NewDataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileInclude">DataCloudflareZeroTrustDeviceDefaultProfileInclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDeviceDefaultProfileInclude
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileInclude">DataCloudflareZeroTrustDeviceDefaultProfileInclude</a>

---


### DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference <a name="DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdevicedefaultprofile"

datacloudflarezerotrustdevicedefaultprofile.NewDataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2">DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2">DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2</a>

---



