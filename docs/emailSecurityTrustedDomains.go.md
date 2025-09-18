# `emailSecurityTrustedDomains` Submodule <a name="`emailSecurityTrustedDomains` Submodule" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityTrustedDomains <a name="EmailSecurityTrustedDomains" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecuritytrusteddomains"

emailsecuritytrusteddomains.NewEmailSecurityTrustedDomains(scope Construct, id *string, config EmailSecurityTrustedDomainsConfig) EmailSecurityTrustedDomains
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig">EmailSecurityTrustedDomainsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig">EmailSecurityTrustedDomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetComments">ResetComments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRecent">ResetIsRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRegex">ResetIsRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsSimilarity">ResetIsSimilarity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetPattern">ResetPattern</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBody` <a name="PutBody" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.putBody"></a>

```go
func PutBody(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.putBody.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetBody"></a>

```go
func ResetBody()
```

##### `ResetComments` <a name="ResetComments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetComments"></a>

```go
func ResetComments()
```

##### `ResetIsRecent` <a name="ResetIsRecent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRecent"></a>

```go
func ResetIsRecent()
```

##### `ResetIsRegex` <a name="ResetIsRegex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRegex"></a>

```go
func ResetIsRegex()
```

##### `ResetIsSimilarity` <a name="ResetIsSimilarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsSimilarity"></a>

```go
func ResetIsSimilarity()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetPattern"></a>

```go
func ResetPattern()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecuritytrusteddomains"

emailsecuritytrusteddomains.EmailSecurityTrustedDomains_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecuritytrusteddomains"

emailsecuritytrusteddomains.EmailSecurityTrustedDomains_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecuritytrusteddomains"

emailsecuritytrusteddomains.EmailSecurityTrustedDomains_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecuritytrusteddomains"

emailsecuritytrusteddomains.EmailSecurityTrustedDomains_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmailSecurityTrustedDomains to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmailSecurityTrustedDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EmailSecurityTrustedDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.body">Body</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList">EmailSecurityTrustedDomainsBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.bodyInput">BodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.commentsInput">CommentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecentInput">IsRecentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegexInput">IsRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarityInput">IsSimilarityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecent">IsRecent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegex">IsRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarity">IsSimilarity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.body"></a>

```go
func Body() EmailSecurityTrustedDomainsBodyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList">EmailSecurityTrustedDomainsBodyList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.bodyInput"></a>

```go
func BodyInput() interface{}
```

- *Type:* interface{}

---

##### `CommentsInput`<sup>Optional</sup> <a name="CommentsInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.commentsInput"></a>

```go
func CommentsInput() *string
```

- *Type:* *string

---

##### `IsRecentInput`<sup>Optional</sup> <a name="IsRecentInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecentInput"></a>

```go
func IsRecentInput() interface{}
```

- *Type:* interface{}

---

##### `IsRegexInput`<sup>Optional</sup> <a name="IsRegexInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegexInput"></a>

```go
func IsRegexInput() interface{}
```

- *Type:* interface{}

---

##### `IsSimilarityInput`<sup>Optional</sup> <a name="IsSimilarityInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarityInput"></a>

```go
func IsSimilarityInput() interface{}
```

- *Type:* interface{}

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `IsRecent`<sup>Required</sup> <a name="IsRecent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecent"></a>

```go
func IsRecent() interface{}
```

- *Type:* interface{}

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegex"></a>

```go
func IsRegex() interface{}
```

- *Type:* interface{}

---

##### `IsSimilarity`<sup>Required</sup> <a name="IsSimilarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarity"></a>

```go
func IsSimilarity() interface{}
```

- *Type:* interface{}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityTrustedDomainsBody <a name="EmailSecurityTrustedDomainsBody" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecuritytrusteddomains"

&emailsecuritytrusteddomains.EmailSecurityTrustedDomainsBody {
	IsRecent: interface{},
	IsRegex: interface{},
	IsSimilarity: interface{},
	Pattern: *string,
	Comments: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRecent">IsRecent</a></code> | <code>interface{}</code> | Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRegex">IsRegex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isSimilarity">IsSimilarity</a></code> | <code>interface{}</code> | Select for partner or other approved domains that have similar spelling to your connected domains. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.pattern">Pattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.comments">Comments</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}. |

---

##### `IsRecent`<sup>Required</sup> <a name="IsRecent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRecent"></a>

```go
IsRecent interface{}
```

- *Type:* interface{}

Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRegex"></a>

```go
IsRegex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}.

---

##### `IsSimilarity`<sup>Required</sup> <a name="IsSimilarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isSimilarity"></a>

```go
IsSimilarity interface{}
```

- *Type:* interface{}

Select for partner or other approved domains that have similar spelling to your connected domains.

Prevents listed domains from
triggering a Spoof disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}.

---

##### `Comments`<sup>Optional</sup> <a name="Comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.comments"></a>

```go
Comments *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}.

---

### EmailSecurityTrustedDomainsConfig <a name="EmailSecurityTrustedDomainsConfig" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecuritytrusteddomains"

&emailsecuritytrusteddomains.EmailSecurityTrustedDomainsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Body: interface{},
	Comments: *string,
	IsRecent: interface{},
	IsRegex: interface{},
	IsSimilarity: interface{},
	Pattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.body">Body</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#body EmailSecurityTrustedDomains#body}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.comments">Comments</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRecent">IsRecent</a></code> | <code>interface{}</code> | Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRegex">IsRegex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isSimilarity">IsSimilarity</a></code> | <code>interface{}</code> | Select for partner or other approved domains that have similar spelling to your connected domains. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.pattern">Pattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#account_id EmailSecurityTrustedDomains#account_id}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.body"></a>

```go
Body interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#body EmailSecurityTrustedDomains#body}.

---

##### `Comments`<sup>Optional</sup> <a name="Comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.comments"></a>

```go
Comments *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}.

---

##### `IsRecent`<sup>Optional</sup> <a name="IsRecent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRecent"></a>

```go
IsRecent interface{}
```

- *Type:* interface{}

Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}

---

##### `IsRegex`<sup>Optional</sup> <a name="IsRegex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRegex"></a>

```go
IsRegex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}.

---

##### `IsSimilarity`<sup>Optional</sup> <a name="IsSimilarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isSimilarity"></a>

```go
IsSimilarity interface{}
```

- *Type:* interface{}

Select for partner or other approved domains that have similar spelling to your connected domains.

Prevents listed domains from
triggering a Spoof disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmailSecurityTrustedDomainsBodyList <a name="EmailSecurityTrustedDomainsBodyList" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecuritytrusteddomains"

emailsecuritytrusteddomains.NewEmailSecurityTrustedDomainsBodyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmailSecurityTrustedDomainsBodyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.get"></a>

```go
func Get(index *f64) EmailSecurityTrustedDomainsBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmailSecurityTrustedDomainsBodyOutputReference <a name="EmailSecurityTrustedDomainsBodyOutputReference" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecuritytrusteddomains"

emailsecuritytrusteddomains.NewEmailSecurityTrustedDomainsBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmailSecurityTrustedDomainsBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resetComments">ResetComments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComments` <a name="ResetComments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resetComments"></a>

```go
func ResetComments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.commentsInput">CommentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecentInput">IsRecentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegexInput">IsRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarityInput">IsSimilarityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecent">IsRecent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegex">IsRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarity">IsSimilarity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentsInput`<sup>Optional</sup> <a name="CommentsInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.commentsInput"></a>

```go
func CommentsInput() *string
```

- *Type:* *string

---

##### `IsRecentInput`<sup>Optional</sup> <a name="IsRecentInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecentInput"></a>

```go
func IsRecentInput() interface{}
```

- *Type:* interface{}

---

##### `IsRegexInput`<sup>Optional</sup> <a name="IsRegexInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegexInput"></a>

```go
func IsRegexInput() interface{}
```

- *Type:* interface{}

---

##### `IsSimilarityInput`<sup>Optional</sup> <a name="IsSimilarityInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarityInput"></a>

```go
func IsSimilarityInput() interface{}
```

- *Type:* interface{}

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `IsRecent`<sup>Required</sup> <a name="IsRecent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecent"></a>

```go
func IsRecent() interface{}
```

- *Type:* interface{}

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegex"></a>

```go
func IsRegex() interface{}
```

- *Type:* interface{}

---

##### `IsSimilarity`<sup>Required</sup> <a name="IsSimilarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarity"></a>

```go
func IsSimilarity() interface{}
```

- *Type:* interface{}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



