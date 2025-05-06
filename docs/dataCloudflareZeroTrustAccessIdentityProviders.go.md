# `dataCloudflareZeroTrustAccessIdentityProviders` Submodule <a name="`dataCloudflareZeroTrustAccessIdentityProviders` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessIdentityProviders <a name="DataCloudflareZeroTrustAccessIdentityProviders" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_identity_providers cloudflare_zero_trust_access_identity_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

datacloudflarezerotrustaccessidentityproviders.NewDataCloudflareZeroTrustAccessIdentityProviders(scope Construct, id *string, config DataCloudflareZeroTrustAccessIdentityProvidersConfig) DataCloudflareZeroTrustAccessIdentityProviders
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig">DataCloudflareZeroTrustAccessIdentityProvidersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig">DataCloudflareZeroTrustAccessIdentityProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetScimEnabled">ResetScimEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetScimEnabled` <a name="ResetScimEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetScimEnabled"></a>

```go
func ResetScimEnabled()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessIdentityProviders resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

datacloudflarezerotrustaccessidentityproviders.DataCloudflareZeroTrustAccessIdentityProviders_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

datacloudflarezerotrustaccessidentityproviders.DataCloudflareZeroTrustAccessIdentityProviders_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

datacloudflarezerotrustaccessidentityproviders.DataCloudflareZeroTrustAccessIdentityProviders_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

datacloudflarezerotrustaccessidentityproviders.DataCloudflareZeroTrustAccessIdentityProviders_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessIdentityProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessIdentityProviders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustAccessIdentityProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_identity_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessIdentityProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList">DataCloudflareZeroTrustAccessIdentityProvidersResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabledInput">ScimEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabled">ScimEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.result"></a>

```go
func Result() DataCloudflareZeroTrustAccessIdentityProvidersResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList">DataCloudflareZeroTrustAccessIdentityProvidersResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `ScimEnabledInput`<sup>Optional</sup> <a name="ScimEnabledInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabledInput"></a>

```go
func ScimEnabledInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `ScimEnabled`<sup>Required</sup> <a name="ScimEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabled"></a>

```go
func ScimEnabled() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessIdentityProvidersConfig <a name="DataCloudflareZeroTrustAccessIdentityProvidersConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

&datacloudflarezerotrustaccessidentityproviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	MaxItems: *f64,
	ScimEnabled: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.scimEnabled">ScimEnabled</a></code> | <code>*string</code> | Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_identity_providers#account_id DataCloudflareZeroTrustAccessIdentityProviders#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_identity_providers#max_items DataCloudflareZeroTrustAccessIdentityProviders#max_items}

---

##### `ScimEnabled`<sup>Optional</sup> <a name="ScimEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.scimEnabled"></a>

```go
ScimEnabled *string
```

- *Type:* *string

Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_identity_providers#scim_enabled DataCloudflareZeroTrustAccessIdentityProviders#scim_enabled}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_identity_providers#zone_id DataCloudflareZeroTrustAccessIdentityProviders#zone_id}

---

### DataCloudflareZeroTrustAccessIdentityProvidersResult <a name="DataCloudflareZeroTrustAccessIdentityProvidersResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

&datacloudflarezerotrustaccessidentityproviders.DataCloudflareZeroTrustAccessIdentityProvidersResult {

}
```


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfig <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

&datacloudflarezerotrustaccessidentityproviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig {

}
```


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

&datacloudflarezerotrustaccessidentityproviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes {

}
```


### DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

&datacloudflarezerotrustaccessidentityproviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

datacloudflarezerotrustaccessidentityproviders.NewDataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

datacloudflarezerotrustaccessidentityproviders.NewDataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes</a>

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

datacloudflarezerotrustaccessidentityproviders.NewDataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.appsDomain">AppsDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.attributes">Attributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authorizationServerId">AuthorizationServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authUrl">AuthUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAccount">CentrifyAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAppId">CentrifyAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.certsUrl">CertsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.claims">Claims</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.conditionalAccessEnabled">ConditionalAccessEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailAttributeName">EmailAttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailClaimName">EmailClaimName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.headerAttributes">HeaderAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.idpPublicCerts">IdpPublicCerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oktaAccount">OktaAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oneloginAccount">OneloginAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pingEnvId">PingEnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pkceEnabled">PkceEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.prompt">Prompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.signRequest">SignRequest</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.ssoTargetUrl">SsoTargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.supportGroups">SupportGroups</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppsDomain`<sup>Required</sup> <a name="AppsDomain" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.appsDomain"></a>

```go
func AppsDomain() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.attributes"></a>

```go
func Attributes() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizationServerId`<sup>Required</sup> <a name="AuthorizationServerId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authorizationServerId"></a>

```go
func AuthorizationServerId() *string
```

- *Type:* *string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authUrl"></a>

```go
func AuthUrl() *string
```

- *Type:* *string

---

##### `CentrifyAccount`<sup>Required</sup> <a name="CentrifyAccount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAccount"></a>

```go
func CentrifyAccount() *string
```

- *Type:* *string

---

##### `CentrifyAppId`<sup>Required</sup> <a name="CentrifyAppId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAppId"></a>

```go
func CentrifyAppId() *string
```

- *Type:* *string

---

##### `CertsUrl`<sup>Required</sup> <a name="CertsUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.certsUrl"></a>

```go
func CertsUrl() *string
```

- *Type:* *string

---

##### `Claims`<sup>Required</sup> <a name="Claims" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.claims"></a>

```go
func Claims() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ConditionalAccessEnabled`<sup>Required</sup> <a name="ConditionalAccessEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.conditionalAccessEnabled"></a>

```go
func ConditionalAccessEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `EmailAttributeName`<sup>Required</sup> <a name="EmailAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailAttributeName"></a>

```go
func EmailAttributeName() *string
```

- *Type:* *string

---

##### `EmailClaimName`<sup>Required</sup> <a name="EmailClaimName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailClaimName"></a>

```go
func EmailClaimName() *string
```

- *Type:* *string

---

##### `HeaderAttributes`<sup>Required</sup> <a name="HeaderAttributes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.headerAttributes"></a>

```go
func HeaderAttributes() DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList</a>

---

##### `IdpPublicCerts`<sup>Required</sup> <a name="IdpPublicCerts" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.idpPublicCerts"></a>

```go
func IdpPublicCerts() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.issuerUrl"></a>

```go
func IssuerUrl() *string
```

- *Type:* *string

---

##### `OktaAccount`<sup>Required</sup> <a name="OktaAccount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oktaAccount"></a>

```go
func OktaAccount() *string
```

- *Type:* *string

---

##### `OneloginAccount`<sup>Required</sup> <a name="OneloginAccount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oneloginAccount"></a>

```go
func OneloginAccount() *string
```

- *Type:* *string

---

##### `PingEnvId`<sup>Required</sup> <a name="PingEnvId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pingEnvId"></a>

```go
func PingEnvId() *string
```

- *Type:* *string

---

##### `PkceEnabled`<sup>Required</sup> <a name="PkceEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pkceEnabled"></a>

```go
func PkceEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.prompt"></a>

```go
func Prompt() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SignRequest`<sup>Required</sup> <a name="SignRequest" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.signRequest"></a>

```go
func SignRequest() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SsoTargetUrl`<sup>Required</sup> <a name="SsoTargetUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.ssoTargetUrl"></a>

```go
func SsoTargetUrl() *string
```

- *Type:* *string

---

##### `SupportGroups`<sup>Required</sup> <a name="SupportGroups" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.supportGroups"></a>

```go
func SupportGroups() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessIdentityProvidersResultConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultConfig</a>

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultList <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

datacloudflarezerotrustaccessidentityproviders.NewDataCloudflareZeroTrustAccessIdentityProvidersResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustAccessIdentityProvidersResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

datacloudflarezerotrustaccessidentityproviders.NewDataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult">DataCloudflareZeroTrustAccessIdentityProvidersResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.config"></a>

```go
func Config() DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScimConfig`<sup>Required</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.scimConfig"></a>

```go
func ScimConfig() DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessIdentityProvidersResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult">DataCloudflareZeroTrustAccessIdentityProvidersResult</a>

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityproviders"

datacloudflarezerotrustaccessidentityproviders.NewDataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.identityUpdateBehavior">IdentityUpdateBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.scimBaseUrl">ScimBaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.seatDeprovision">SeatDeprovision</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.userDeprovision">UserDeprovision</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdentityUpdateBehavior`<sup>Required</sup> <a name="IdentityUpdateBehavior" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.identityUpdateBehavior"></a>

```go
func IdentityUpdateBehavior() *string
```

- *Type:* *string

---

##### `ScimBaseUrl`<sup>Required</sup> <a name="ScimBaseUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.scimBaseUrl"></a>

```go
func ScimBaseUrl() *string
```

- *Type:* *string

---

##### `SeatDeprovision`<sup>Required</sup> <a name="SeatDeprovision" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.seatDeprovision"></a>

```go
func SeatDeprovision() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `UserDeprovision`<sup>Required</sup> <a name="UserDeprovision" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.userDeprovision"></a>

```go
func UserDeprovision() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig</a>

---



