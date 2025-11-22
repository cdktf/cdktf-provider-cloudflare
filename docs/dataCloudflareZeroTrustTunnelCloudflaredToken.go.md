# `dataCloudflareZeroTrustTunnelCloudflaredToken` Submodule <a name="`dataCloudflareZeroTrustTunnelCloudflaredToken` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredToken <a name="DataCloudflareZeroTrustTunnelCloudflaredToken" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_token cloudflare_zero_trust_tunnel_cloudflared_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredtoken"

datacloudflarezerotrusttunnelcloudflaredtoken.NewDataCloudflareZeroTrustTunnelCloudflaredToken(scope Construct, id *string, config DataCloudflareZeroTrustTunnelCloudflaredTokenConfig) DataCloudflareZeroTrustTunnelCloudflaredToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig">DataCloudflareZeroTrustTunnelCloudflaredTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig">DataCloudflareZeroTrustTunnelCloudflaredTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredToken resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredtoken"

datacloudflarezerotrusttunnelcloudflaredtoken.DataCloudflareZeroTrustTunnelCloudflaredToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredtoken"

datacloudflarezerotrusttunnelcloudflaredtoken.DataCloudflareZeroTrustTunnelCloudflaredToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredtoken"

datacloudflarezerotrusttunnelcloudflaredtoken.DataCloudflareZeroTrustTunnelCloudflaredToken_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredtoken"

datacloudflarezerotrusttunnelcloudflaredtoken.DataCloudflareZeroTrustTunnelCloudflaredToken_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustTunnelCloudflaredToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.tunnelIdInput">TunnelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.tunnelIdInput"></a>

```go
func TunnelIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredTokenConfig <a name="DataCloudflareZeroTrustTunnelCloudflaredTokenConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredtoken"

&datacloudflarezerotrusttunnelcloudflaredtoken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	TunnelId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.tunnelId">TunnelId</a></code> | <code>*string</code> | UUID of the tunnel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_token#account_id DataCloudflareZeroTrustTunnelCloudflaredToken#account_id}

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredToken.DataCloudflareZeroTrustTunnelCloudflaredTokenConfig.property.tunnelId"></a>

```go
TunnelId *string
```

- *Type:* *string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_token#tunnel_id DataCloudflareZeroTrustTunnelCloudflaredToken#tunnel_id}

---



