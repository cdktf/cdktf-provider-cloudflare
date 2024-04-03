# `accessMutualTlsCertificate` Submodule <a name="`accessMutualTlsCertificate` Submodule" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessMutualTlsCertificate <a name="AccessMutualTlsCertificate" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_certificate cloudflare_access_mutual_tls_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessmutualtlscertificate"

accessmutualtlscertificate.NewAccessMutualTlsCertificate(scope Construct, id *string, config AccessMutualTlsCertificateConfig) AccessMutualTlsCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig">AccessMutualTlsCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig">AccessMutualTlsCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetAssociatedHostnames">ResetAssociatedHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAssociatedHostnames` <a name="ResetAssociatedHostnames" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetAssociatedHostnames"></a>

```go
func ResetAssociatedHostnames()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessMutualTlsCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessmutualtlscertificate"

accessmutualtlscertificate.AccessMutualTlsCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessmutualtlscertificate"

accessmutualtlscertificate.AccessMutualTlsCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessmutualtlscertificate"

accessmutualtlscertificate.AccessMutualTlsCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessmutualtlscertificate"

accessmutualtlscertificate.AccessMutualTlsCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AccessMutualTlsCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccessMutualTlsCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccessMutualTlsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AccessMutualTlsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.associatedHostnamesInput">AssociatedHostnamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.associatedHostnames">AssociatedHostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AssociatedHostnamesInput`<sup>Optional</sup> <a name="AssociatedHostnamesInput" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.associatedHostnamesInput"></a>

```go
func AssociatedHostnamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AssociatedHostnames`<sup>Required</sup> <a name="AssociatedHostnames" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.associatedHostnames"></a>

```go
func AssociatedHostnames() *[]*string
```

- *Type:* *[]*string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessMutualTlsCertificateConfig <a name="AccessMutualTlsCertificateConfig" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessmutualtlscertificate"

&accessmutualtlscertificate.AccessMutualTlsCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccountId: *string,
	AssociatedHostnames: *[]*string,
	Certificate: *string,
	Id: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the certificate. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.associatedHostnames">AssociatedHostnames</a></code> | <code>*[]*string</code> | The hostnames that will be prompted for this certificate. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.certificate">Certificate</a></code> | <code>*string</code> | The Root CA for your certificates. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_certificate#id AccessMutualTlsCertificate#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_certificate#name AccessMutualTlsCertificate#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_certificate#account_id AccessMutualTlsCertificate#account_id}

---

##### `AssociatedHostnames`<sup>Optional</sup> <a name="AssociatedHostnames" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.associatedHostnames"></a>

```go
AssociatedHostnames *[]*string
```

- *Type:* *[]*string

The hostnames that will be prompted for this certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_certificate#associated_hostnames AccessMutualTlsCertificate#associated_hostnames}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

The Root CA for your certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_certificate#certificate AccessMutualTlsCertificate#certificate}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_certificate#id AccessMutualTlsCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessMutualTlsCertificate.AccessMutualTlsCertificateConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_certificate#zone_id AccessMutualTlsCertificate#zone_id}

---



