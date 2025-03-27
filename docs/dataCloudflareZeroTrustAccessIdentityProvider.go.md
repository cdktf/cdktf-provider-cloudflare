# `dataCloudflareZeroTrustAccessIdentityProvider` Submodule <a name="`dataCloudflareZeroTrustAccessIdentityProvider` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessIdentityProvider <a name="DataCloudflareZeroTrustAccessIdentityProvider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

datacloudflarezerotrustaccessidentityprovider.NewDataCloudflareZeroTrustAccessIdentityProvider(scope Construct, id *string, config DataCloudflareZeroTrustAccessIdentityProviderConfig) DataCloudflareZeroTrustAccessIdentityProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig">DataCloudflareZeroTrustAccessIdentityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig">DataCloudflareZeroTrustAccessIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.putFilter"></a>

```go
func PutFilter(value DataCloudflareZeroTrustAccessIdentityProviderFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilter">DataCloudflareZeroTrustAccessIdentityProviderFilter</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

datacloudflarezerotrustaccessidentityprovider.DataCloudflareZeroTrustAccessIdentityProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

datacloudflarezerotrustaccessidentityprovider.DataCloudflareZeroTrustAccessIdentityProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

datacloudflarezerotrustaccessidentityprovider.DataCloudflareZeroTrustAccessIdentityProvider_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

datacloudflarezerotrustaccessidentityprovider.DataCloudflareZeroTrustAccessIdentityProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustAccessIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference">DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference">DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.config"></a>

```go
func Config() DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference">DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.filter"></a>

```go
func Filter() DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference">DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScimConfig`<sup>Required</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.scimConfig"></a>

```go
func ScimConfig() DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessIdentityProviderConfig <a name="DataCloudflareZeroTrustAccessIdentityProviderConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

&datacloudflarezerotrustaccessidentityprovider.DataCloudflareZeroTrustAccessIdentityProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilter,
	IdentityProviderId: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilter">DataCloudflareZeroTrustAccessIdentityProviderFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_provider#filter DataCloudflareZeroTrustAccessIdentityProvider#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_provider#account_id DataCloudflareZeroTrustAccessIdentityProvider#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.filter"></a>

```go
Filter DataCloudflareZeroTrustAccessIdentityProviderFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilter">DataCloudflareZeroTrustAccessIdentityProviderFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_provider#filter DataCloudflareZeroTrustAccessIdentityProvider#filter}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_provider#identity_provider_id DataCloudflareZeroTrustAccessIdentityProvider#identity_provider_id}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_provider#zone_id DataCloudflareZeroTrustAccessIdentityProvider#zone_id}

---

### DataCloudflareZeroTrustAccessIdentityProviderConfigA <a name="DataCloudflareZeroTrustAccessIdentityProviderConfigA" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

&datacloudflarezerotrustaccessidentityprovider.DataCloudflareZeroTrustAccessIdentityProviderConfigA {

}
```


### DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributes <a name="DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

&datacloudflarezerotrustaccessidentityprovider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributes {

}
```


### DataCloudflareZeroTrustAccessIdentityProviderFilter <a name="DataCloudflareZeroTrustAccessIdentityProviderFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

&datacloudflarezerotrustaccessidentityprovider.DataCloudflareZeroTrustAccessIdentityProviderFilter {
	ScimEnabled: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilter.property.scimEnabled">ScimEnabled</a></code> | <code>*string</code> | Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled. |

---

##### `ScimEnabled`<sup>Optional</sup> <a name="ScimEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilter.property.scimEnabled"></a>

```go
ScimEnabled *string
```

- *Type:* *string

Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_provider#scim_enabled DataCloudflareZeroTrustAccessIdentityProvider#scim_enabled}

---

### DataCloudflareZeroTrustAccessIdentityProviderScimConfig <a name="DataCloudflareZeroTrustAccessIdentityProviderScimConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

&datacloudflarezerotrustaccessidentityprovider.DataCloudflareZeroTrustAccessIdentityProviderScimConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

datacloudflarezerotrustaccessidentityprovider.NewDataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomain">AppsDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributes">Attributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerId">AuthorizationServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrl">AuthUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccount">CentrifyAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppId">CentrifyAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrl">CertsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.claims">Claims</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled">ConditionalAccessEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeName">EmailAttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimName">EmailClaimName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.headerAttributes">HeaderAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList">DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCerts">IdpPublicCerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccount">OktaAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccount">OneloginAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvId">PingEnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabled">PkceEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.prompt">Prompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequest">SignRequest</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl">SsoTargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroups">SupportGroups</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigA">DataCloudflareZeroTrustAccessIdentityProviderConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppsDomain`<sup>Required</sup> <a name="AppsDomain" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomain"></a>

```go
func AppsDomain() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributes"></a>

```go
func Attributes() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizationServerId`<sup>Required</sup> <a name="AuthorizationServerId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerId"></a>

```go
func AuthorizationServerId() *string
```

- *Type:* *string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrl"></a>

```go
func AuthUrl() *string
```

- *Type:* *string

---

##### `CentrifyAccount`<sup>Required</sup> <a name="CentrifyAccount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccount"></a>

```go
func CentrifyAccount() *string
```

- *Type:* *string

---

##### `CentrifyAppId`<sup>Required</sup> <a name="CentrifyAppId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppId"></a>

```go
func CentrifyAppId() *string
```

- *Type:* *string

---

##### `CertsUrl`<sup>Required</sup> <a name="CertsUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrl"></a>

```go
func CertsUrl() *string
```

- *Type:* *string

---

##### `Claims`<sup>Required</sup> <a name="Claims" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.claims"></a>

```go
func Claims() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ConditionalAccessEnabled`<sup>Required</sup> <a name="ConditionalAccessEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled"></a>

```go
func ConditionalAccessEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `EmailAttributeName`<sup>Required</sup> <a name="EmailAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeName"></a>

```go
func EmailAttributeName() *string
```

- *Type:* *string

---

##### `EmailClaimName`<sup>Required</sup> <a name="EmailClaimName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimName"></a>

```go
func EmailClaimName() *string
```

- *Type:* *string

---

##### `HeaderAttributes`<sup>Required</sup> <a name="HeaderAttributes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.headerAttributes"></a>

```go
func HeaderAttributes() DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList">DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList</a>

---

##### `IdpPublicCerts`<sup>Required</sup> <a name="IdpPublicCerts" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCerts"></a>

```go
func IdpPublicCerts() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrl"></a>

```go
func IssuerUrl() *string
```

- *Type:* *string

---

##### `OktaAccount`<sup>Required</sup> <a name="OktaAccount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccount"></a>

```go
func OktaAccount() *string
```

- *Type:* *string

---

##### `OneloginAccount`<sup>Required</sup> <a name="OneloginAccount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccount"></a>

```go
func OneloginAccount() *string
```

- *Type:* *string

---

##### `PingEnvId`<sup>Required</sup> <a name="PingEnvId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvId"></a>

```go
func PingEnvId() *string
```

- *Type:* *string

---

##### `PkceEnabled`<sup>Required</sup> <a name="PkceEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabled"></a>

```go
func PkceEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.prompt"></a>

```go
func Prompt() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SignRequest`<sup>Required</sup> <a name="SignRequest" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequest"></a>

```go
func SignRequest() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SsoTargetUrl`<sup>Required</sup> <a name="SsoTargetUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl"></a>

```go
func SsoTargetUrl() *string
```

- *Type:* *string

---

##### `SupportGroups`<sup>Required</sup> <a name="SupportGroups" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroups"></a>

```go
func SupportGroups() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessIdentityProviderConfigA
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigA">DataCloudflareZeroTrustAccessIdentityProviderConfigA</a>

---


### DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList <a name="DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

datacloudflarezerotrustaccessidentityprovider.NewDataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

datacloudflarezerotrustaccessidentityprovider.NewDataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributes">DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributes
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributes">DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributes</a>

---


### DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

datacloudflarezerotrustaccessidentityprovider.NewDataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.resetScimEnabled">ResetScimEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScimEnabled` <a name="ResetScimEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.resetScimEnabled"></a>

```go
func ResetScimEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.property.scimEnabledInput">ScimEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.property.scimEnabled">ScimEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScimEnabledInput`<sup>Optional</sup> <a name="ScimEnabledInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.property.scimEnabledInput"></a>

```go
func ScimEnabledInput() *string
```

- *Type:* *string

---

##### `ScimEnabled`<sup>Required</sup> <a name="ScimEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.property.scimEnabled"></a>

```go
func ScimEnabled() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustaccessidentityprovider"

datacloudflarezerotrustaccessidentityprovider.NewDataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.identityUpdateBehavior">IdentityUpdateBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.scimBaseUrl">ScimBaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovision">SeatDeprovision</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovision">UserDeprovision</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfig">DataCloudflareZeroTrustAccessIdentityProviderScimConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdentityUpdateBehavior`<sup>Required</sup> <a name="IdentityUpdateBehavior" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.identityUpdateBehavior"></a>

```go
func IdentityUpdateBehavior() *string
```

- *Type:* *string

---

##### `ScimBaseUrl`<sup>Required</sup> <a name="ScimBaseUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.scimBaseUrl"></a>

```go
func ScimBaseUrl() *string
```

- *Type:* *string

---

##### `SeatDeprovision`<sup>Required</sup> <a name="SeatDeprovision" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovision"></a>

```go
func SeatDeprovision() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `UserDeprovision`<sup>Required</sup> <a name="UserDeprovision" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovision"></a>

```go
func UserDeprovision() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessIdentityProviderScimConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProvider.DataCloudflareZeroTrustAccessIdentityProviderScimConfig">DataCloudflareZeroTrustAccessIdentityProviderScimConfig</a>

---



