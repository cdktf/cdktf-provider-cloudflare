# `dataCloudflareZeroTrustDlpIntegrationEntry` Submodule <a name="`dataCloudflareZeroTrustDlpIntegrationEntry` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpIntegrationEntry <a name="DataCloudflareZeroTrustDlpIntegrationEntry" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_dlp_integration_entry cloudflare_zero_trust_dlp_integration_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

datacloudflarezerotrustdlpintegrationentry.NewDataCloudflareZeroTrustDlpIntegrationEntry(scope Construct, id *string, config DataCloudflareZeroTrustDlpIntegrationEntryConfig) DataCloudflareZeroTrustDlpIntegrationEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig">DataCloudflareZeroTrustDlpIntegrationEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig">DataCloudflareZeroTrustDlpIntegrationEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.resetEntryId">ResetEntryId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEntryId` <a name="ResetEntryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.resetEntryId"></a>

```go
func ResetEntryId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDlpIntegrationEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

datacloudflarezerotrustdlpintegrationentry.DataCloudflareZeroTrustDlpIntegrationEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

datacloudflarezerotrustdlpintegrationentry.DataCloudflareZeroTrustDlpIntegrationEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

datacloudflarezerotrustdlpintegrationentry.DataCloudflareZeroTrustDlpIntegrationEntry_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

datacloudflarezerotrustdlpintegrationentry.DataCloudflareZeroTrustDlpIntegrationEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDlpIntegrationEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpIntegrationEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustDlpIntegrationEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_dlp_integration_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpIntegrationEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.caseSensitive">CaseSensitive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.confidence">Confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.pattern">Pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.secret">Secret</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.variant">Variant</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.wordList">WordList</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.entryIdInput">EntryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.entryId">EntryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.caseSensitive"></a>

```go
func CaseSensitive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Confidence`<sup>Required</sup> <a name="Confidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.confidence"></a>

```go
func Confidence() DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.pattern"></a>

```go
func Pattern() DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference</a>

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.secret"></a>

```go
func Secret() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Variant`<sup>Required</sup> <a name="Variant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.variant"></a>

```go
func Variant() DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference</a>

---

##### `WordList`<sup>Required</sup> <a name="WordList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.wordList"></a>

```go
func WordList() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `EntryIdInput`<sup>Optional</sup> <a name="EntryIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.entryIdInput"></a>

```go
func EntryIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.entryId"></a>

```go
func EntryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpIntegrationEntryConfidence <a name="DataCloudflareZeroTrustDlpIntegrationEntryConfidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

&datacloudflarezerotrustdlpintegrationentry.DataCloudflareZeroTrustDlpIntegrationEntryConfidence {

}
```


### DataCloudflareZeroTrustDlpIntegrationEntryConfig <a name="DataCloudflareZeroTrustDlpIntegrationEntryConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

&datacloudflarezerotrustdlpintegrationentry.DataCloudflareZeroTrustDlpIntegrationEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	EntryId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_dlp_integration_entry#account_id DataCloudflareZeroTrustDlpIntegrationEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.entryId">EntryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_dlp_integration_entry#entry_id DataCloudflareZeroTrustDlpIntegrationEntry#entry_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_dlp_integration_entry#account_id DataCloudflareZeroTrustDlpIntegrationEntry#account_id}.

---

##### `EntryId`<sup>Optional</sup> <a name="EntryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.entryId"></a>

```go
EntryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_dlp_integration_entry#entry_id DataCloudflareZeroTrustDlpIntegrationEntry#entry_id}.

---

### DataCloudflareZeroTrustDlpIntegrationEntryPattern <a name="DataCloudflareZeroTrustDlpIntegrationEntryPattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

&datacloudflarezerotrustdlpintegrationentry.DataCloudflareZeroTrustDlpIntegrationEntryPattern {

}
```


### DataCloudflareZeroTrustDlpIntegrationEntryVariant <a name="DataCloudflareZeroTrustDlpIntegrationEntryVariant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

&datacloudflarezerotrustdlpintegrationentry.DataCloudflareZeroTrustDlpIntegrationEntryVariant {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference <a name="DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

datacloudflarezerotrustdlpintegrationentry.NewDataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.aiContextAvailable">AiContextAvailable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.available">Available</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidence">DataCloudflareZeroTrustDlpIntegrationEntryConfidence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AiContextAvailable`<sup>Required</sup> <a name="AiContextAvailable" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.aiContextAvailable"></a>

```go
func AiContextAvailable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Available`<sup>Required</sup> <a name="Available" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.available"></a>

```go
func Available() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpIntegrationEntryConfidence
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidence">DataCloudflareZeroTrustDlpIntegrationEntryConfidence</a>

---


### DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference <a name="DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

datacloudflarezerotrustdlpintegrationentry.NewDataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.validation">Validation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPattern">DataCloudflareZeroTrustDlpIntegrationEntryPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.validation"></a>

```go
func Validation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpIntegrationEntryPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPattern">DataCloudflareZeroTrustDlpIntegrationEntryPattern</a>

---


### DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference <a name="DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlpintegrationentry"

datacloudflarezerotrustdlpintegrationentry.NewDataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.topicType">TopicType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariant">DataCloudflareZeroTrustDlpIntegrationEntryVariant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `TopicType`<sup>Required</sup> <a name="TopicType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.topicType"></a>

```go
func TopicType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpIntegrationEntryVariant
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariant">DataCloudflareZeroTrustDlpIntegrationEntryVariant</a>

---



