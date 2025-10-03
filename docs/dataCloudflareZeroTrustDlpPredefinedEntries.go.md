# `dataCloudflareZeroTrustDlpPredefinedEntries` Submodule <a name="`dataCloudflareZeroTrustDlpPredefinedEntries` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpPredefinedEntries <a name="DataCloudflareZeroTrustDlpPredefinedEntries" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_predefined_entries cloudflare_zero_trust_dlp_predefined_entries}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

datacloudflarezerotrustdlppredefinedentries.NewDataCloudflareZeroTrustDlpPredefinedEntries(scope Construct, id *string, config DataCloudflareZeroTrustDlpPredefinedEntriesConfig) DataCloudflareZeroTrustDlpPredefinedEntries
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig">DataCloudflareZeroTrustDlpPredefinedEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig">DataCloudflareZeroTrustDlpPredefinedEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedEntries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

datacloudflarezerotrustdlppredefinedentries.DataCloudflareZeroTrustDlpPredefinedEntries_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

datacloudflarezerotrustdlppredefinedentries.DataCloudflareZeroTrustDlpPredefinedEntries_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

datacloudflarezerotrustdlppredefinedentries.DataCloudflareZeroTrustDlpPredefinedEntries_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

datacloudflarezerotrustdlppredefinedentries.DataCloudflareZeroTrustDlpPredefinedEntries_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpPredefinedEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustDlpPredefinedEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_predefined_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpPredefinedEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList">DataCloudflareZeroTrustDlpPredefinedEntriesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.result"></a>

```go
func Result() DataCloudflareZeroTrustDlpPredefinedEntriesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList">DataCloudflareZeroTrustDlpPredefinedEntriesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntries.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpPredefinedEntriesConfig <a name="DataCloudflareZeroTrustDlpPredefinedEntriesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

&datacloudflarezerotrustdlppredefinedentries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	MaxItems: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_predefined_entries#account_id DataCloudflareZeroTrustDlpPredefinedEntries#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_predefined_entries#account_id DataCloudflareZeroTrustDlpPredefinedEntries#account_id}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_predefined_entries#max_items DataCloudflareZeroTrustDlpPredefinedEntries#max_items}

---

### DataCloudflareZeroTrustDlpPredefinedEntriesResult <a name="DataCloudflareZeroTrustDlpPredefinedEntriesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

&datacloudflarezerotrustdlppredefinedentries.DataCloudflareZeroTrustDlpPredefinedEntriesResult {

}
```


### DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence <a name="DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

&datacloudflarezerotrustdlppredefinedentries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence {

}
```


### DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern <a name="DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

&datacloudflarezerotrustdlppredefinedentries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern {

}
```


### DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant <a name="DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

&datacloudflarezerotrustdlppredefinedentries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

datacloudflarezerotrustdlppredefinedentries.NewDataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.property.aiContextAvailable">AiContextAvailable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.property.available">Available</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence">DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AiContextAvailable`<sup>Required</sup> <a name="AiContextAvailable" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.property.aiContextAvailable"></a>

```go
func AiContextAvailable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Available`<sup>Required</sup> <a name="Available" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.property.available"></a>

```go
func Available() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence">DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence</a>

---


### DataCloudflareZeroTrustDlpPredefinedEntriesResultList <a name="DataCloudflareZeroTrustDlpPredefinedEntriesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

datacloudflarezerotrustdlppredefinedentries.NewDataCloudflareZeroTrustDlpPredefinedEntriesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDlpPredefinedEntriesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

datacloudflarezerotrustdlppredefinedentries.NewDataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.confidence">Confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference">DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.pattern">Pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference">DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.secret">Secret</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.variant">Variant</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference">DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.wordList">WordList</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResult">DataCloudflareZeroTrustDlpPredefinedEntriesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.caseSensitive"></a>

```go
func CaseSensitive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Confidence`<sup>Required</sup> <a name="Confidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.confidence"></a>

```go
func Confidence() DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference">DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.pattern"></a>

```go
func Pattern() DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference">DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference</a>

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.secret"></a>

```go
func Secret() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Variant`<sup>Required</sup> <a name="Variant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.variant"></a>

```go
func Variant() DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference">DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference</a>

---

##### `WordList`<sup>Required</sup> <a name="WordList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.wordList"></a>

```go
func WordList() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpPredefinedEntriesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResult">DataCloudflareZeroTrustDlpPredefinedEntriesResult</a>

---


### DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

datacloudflarezerotrustdlppredefinedentries.NewDataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.property.validation">Validation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern">DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.property.validation"></a>

```go
func Validation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern">DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern</a>

---


### DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdlppredefinedentries"

datacloudflarezerotrustdlppredefinedentries.NewDataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.topicType">TopicType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant">DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `TopicType`<sup>Required</sup> <a name="TopicType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.topicType"></a>

```go
func TopicType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntries.DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant">DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant</a>

---



